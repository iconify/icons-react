import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvlvhpb4k.css';
import '../../css/k/kwtkd3b7k.css';
import '../../css/r/r9r4dibst.css';
import '../../css/x/xprwyhbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cvlvhpb4k"><path class="kwtkd3b7k"/><circle class="r9r4dibst"/><circle class="xprwyhbwt"/></g>`,
		"fallback": "iconamoon:options-bold",
	});
}

export default Component;
