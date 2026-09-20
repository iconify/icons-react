import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxq5pqbqo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxq5pqbqo"/>`,
		"fallback": "streamline:interface-id-face-scan-2-identification-angle-secure-human-id-person-face-security-brackets",
	});
}

export default Component;
