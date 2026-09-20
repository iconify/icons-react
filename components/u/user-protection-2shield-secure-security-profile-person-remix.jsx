import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndu0r1b-l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ndu0r1b-l"/>`,
		"fallback": "streamline:user-protection-2shield-secure-security-profile-person-remix",
	});
}

export default Component;
