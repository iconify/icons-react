import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d41a1jb2b.css';
import '../../css/k/kg1lwmffq.css';
import '../../css/b/bsbp2z6jx.css';
import '../../css/v/vskomn-ks.css';
import '../../css/j/j8ihrqb0c.css';
import '../../css/h/h6woxez7l.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="d41a1jb2b wm-shadow"/><path class="kg1lwmffq"/><path class="bsbp2z6jx"/><path class="vskomn-ks"/><path class="j8ihrqb0c"/><path class="h6woxez7l wm-shine"/><path class="akvr8ibym wm-deco"/></g>`,
		"fallback": "withicons-sticker:shopping-cart",
	});
}

export default Component;
