import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw-kxfbww.css';
import '../../css/j/jsq5bnb6o.css';
import '../../css/j/jvnfbhd9k.css';
import '../../css/i/inbgs4u2c.css';
import '../../css/w/w8tvesbeu.css';
import '../../css/d/dp1_x8bqe.css';
import '../../css/b/bddezrboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw-kxfbww wm-shadow"/><path class="jsq5bnb6o wm-k"/><path class="jvnfbhd9k wm-k"/><path class="inbgs4u2c wm-k"/><path class="w8tvesbeu wm-k"/><path class="dp1_x8bqe wm-k"/><path class="bddezrboj wm-shine"/>`,
		"fallback": "withicons-pastel:split",
	});
}

export default Component;
