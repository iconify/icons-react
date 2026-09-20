import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a24zy1flc.css';
import '../../css/a/a02hlxqdv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="a24zy1flc"/><path class="a02hlxqdv"/></g>`,
		"fallback": "streamline:interface-edit-printer-printer-company-office-supplies-work",
	});
}

export default Component;
