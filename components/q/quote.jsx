import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wtss34l8c.css';
import '../../css/s/sch97tbtk.css';
import '../../css/l/lfte-rb_e.css';
import '../../css/f/f47ozsb6t.css';
import '../../css/b/ba872lbnz.css';
import '../../css/x/x-o15vaui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wtss34l8c"/><path class="sch97tbtk"/><path class="lfte-rb_e"/><path class="f47ozsb6t"/><path class="ba872lbnz wm-shine"/><path class="wm-deco x-o15vaui"/></g>`,
		"fallback": "withicons-sticker:quote",
	});
}

export default Component;
