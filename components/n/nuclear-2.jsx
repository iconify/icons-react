import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/p/pqhsoxche.css';
import '../../css/p/p07258__w.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="pqhsoxche"/><path class="p07258__w"/></g>`,
		"fallback": "streamline-stickies-color:nuclear-2",
	});
}

export default Component;
