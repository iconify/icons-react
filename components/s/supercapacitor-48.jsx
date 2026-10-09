import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep5t2hqnv.css';
import '../../css/z/z05d-bcpb.css';
import '../../css/j/j1fn-ib4w.css';
import '../../css/d/d8t2v1dij.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep5t2hqnv"/><path class="z05d-bcpb"/><path class="j1fn-ib4w"/><path class="d8t2v1dij"/>`,
		"fallback": "energy-icons:supercapacitor-48",
	});
}

export default Component;
