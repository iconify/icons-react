import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_40brb9k.css';
import '../../css/g/gm22ybcwr.css';
import '../../css/y/ykwl75vcb.css';
import '../../css/d/dyfh76b9p.css';
import '../../css/o/of830sbyf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_40brb9k"/><path class="gm22ybcwr"/><path class="ykwl75vcb"/><path class="dyfh76b9p"/><path class="of830sbyf"/>`,
		"fallback": "fxemoji:peach",
	});
}

export default Component;
