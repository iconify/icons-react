import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q9cvlfbfn.css';
import '../../css/t/t_stbb4ht.css';
import '../../css/g/gejdknbzc.css';
import '../../css/c/c3htnqb9k.css';
import '../../css/h/h2jr6bd6r.css';
import '../../css/b/bgjfcp78h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="q9cvlfbfn wm-shadow"/><path class="t_stbb4ht"/><path class="gejdknbzc"/><path class="c3htnqb9k"/><path class="h2jr6bd6r wm-shine"/><path class="bgjfcp78h wm-deco"/></g>`,
		"fallback": "withicons-sticker:moon",
	});
}

export default Component;
