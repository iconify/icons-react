import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nypwcubuv.css';
import '../../css/s/sew33rd1d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nypwcubuv"/><path class="sew33rd1d"/></g>`,
		"fallback": "streamline:interface-edit-write-circle-change-circle-edit-modify-pencil-write-writing",
	});
}

export default Component;
