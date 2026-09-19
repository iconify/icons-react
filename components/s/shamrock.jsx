import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-ulsw_ta.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dtjq5ubdn.css';
import '../../css/p/p6udk3bpf.css';
import '../../css/j/jz4o31b3z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG7uvgHdPV" class="m-ulsw_ta"/></defs><g class="ft5dv1b6b"><use href="#SVG7uvgHdPV"/><path class="dtjq5ubdn"/><path class="p6udk3bpf"/><use href="#SVG7uvgHdPV"/><path class="jz4o31b3z"/></g>`,
		"fallback": "fluent-emoji-flat:shamrock",
	});
}

export default Component;
