import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z7iui6bfm.css';
import '../../css/x/xtimiwb4t.css';
import '../../css/w/wns8g6r_f.css';
import '../../css/e/e4rxnntim.css';
import '../../css/h/hjq9e47ox.css';
import '../../css/z/z1vrtjzgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z7iui6bfm"/><path class="xtimiwb4t"/><path class="wns8g6r_f"/><path class="e4rxnntim"/><path class="hjq9e47ox"/><path class="z1vrtjzgu"/></g>`,
		"fallback": "iconaut:scooter",
	});
}

export default Component;
