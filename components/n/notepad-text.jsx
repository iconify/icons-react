import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h9h01bb2i.css';
import '../../css/t/t1lobu87z.css';
import '../../css/t/tanweb77t.css';
import '../../css/l/li1kh5toh.css';
import '../../css/p/pq4s2vboh.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="h9h01bb2i wm-shadow"/><path class="t1lobu87z"/><path class="tanweb77t"/><path class="li1kh5toh"/><path class="pq4s2vboh wm-shine"/><path class="aexe23bqk wm-deco"/></g>`,
		"fallback": "withicons-sticker:notepad-text",
	});
}

export default Component;
