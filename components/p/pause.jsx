import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wm9p8zbaz.css';
import '../../css/n/n_d5_ei4i.css';
import '../../css/k/kxw0ombcb.css';
import '../../css/j/jfhdloezs.css';
import '../../css/q/q4beycc6p.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wm9p8zbaz"/><path class="n_d5_ei4i"/><path class="kxw0ombcb"/><path class="jfhdloezs"/><path class="q4beycc6p wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`,
		"fallback": "withicons-sticker:pause",
	});
}

export default Component;
