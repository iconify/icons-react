import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t5wugnbhd.css';
import '../../css/y/yph-txb3i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t5wugnbhd"/><rect class="yph-txb3i"/></g>`,
		"fallback": "streamline:interface-text-formatting-text-square-text-options-formatting-format-square-color-border-fill",
	});
}

export default Component;
