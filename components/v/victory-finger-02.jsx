import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qph_4msfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qph_4msfm"/>`,
		"fallback": "hugeicons:victory-finger-02",
	});
}

export default Component;
