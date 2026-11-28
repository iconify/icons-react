import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v_sdkokhb.css';
import '../../css/o/o1pzjk15e.css';
import '../../css/c/c0g-e03sv.css';
import '../../css/u/ugcv8ujgr.css';
import '../../css/z/zkxj-fb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v_sdkokhb"/><path class="o1pzjk15e"/><path class="c0g-e03sv"/><path class="ugcv8ujgr"/><path class="zkxj-fb7s"/></g>`,
		"fallback": "iconaut:split-duo",
	});
}

export default Component;
