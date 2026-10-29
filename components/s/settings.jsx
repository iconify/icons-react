import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mh19hsbxq.css';
import '../../css/k/k1iom5bez.css';
import '../../css/q/q44493blq.css';
import '../../css/c/crrf0rfgs.css';
import '../../css/i/is_g28qff.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="mh19hsbxq wm-shadow"/><path class="k1iom5bez"/><path class="q44493blq"/><path class="crrf0rfgs"/><path class="is_g28qff wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`,
		"fallback": "withicons-sticker:settings",
	});
}

export default Component;
