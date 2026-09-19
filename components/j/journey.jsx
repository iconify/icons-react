import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/n/n0hm4nbhq.css';
import '../../css/o/oh541vsrw.css';
import '../../css/c/c2bjy1bct.css';
import '../../css/r/rff5n-b1t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="n0hm4nbhq"/><path class="oh541vsrw"/><path class="c2bjy1bct"/><path class="rff5n-b1t"/></g>`,
		"fallback": "icon-park-outline:journey",
	});
}

export default Component;
