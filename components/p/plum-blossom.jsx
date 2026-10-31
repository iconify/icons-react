import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xi8rysb6o.css';
import '../../css/k/k2o1gebqm.css';
import '../../css/h/hjxvjzbmm.css';
import '../../css/x/xgjzbacts.css';
import '../../css/a/a-ykpnb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="xi8rysb6o"/><path class="k2o1gebqm wm-shine"/><path class="hjxvjzbmm wm-k"/><path class="wm-a xgjzbacts"/><path class="a-ykpnb1v wm-s"/></g>`,
		"fallback": "withicons-kawaii:plum-blossom",
	});
}

export default Component;
