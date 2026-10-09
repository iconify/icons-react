import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo7du9zba.css';
import '../../css/x/xjow9tx1f.css';
import '../../css/d/d6q9c8lhh.css';
import '../../css/y/y0z9-uuzg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo7du9zba"/><path class="xjow9tx1f"/><path class="d6q9c8lhh"/><path class="y0z9-uuzg"/>`,
		"fallback": "energy-icons:met-mast-48",
	});
}

export default Component;
