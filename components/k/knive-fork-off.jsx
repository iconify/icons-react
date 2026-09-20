import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gzsaiiblw.css';
import '../../css/f/fp56qruxy.css';
import '../../css/q/q5ib2xb9z.css';
import '../../css/x/xyps7cbjg.css';
import '../../css/y/ydwzs1jqt.css';
import '../../css/f/fr-6pqe2i.css';
import '../../css/n/npxsi1bzj.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gzsaiiblw"/><path clip-rule="evenodd" class="fp56qruxy"/><path clip-rule="evenodd" class="q5ib2xb9z"/><path class="xyps7cbjg"/><path class="ydwzs1jqt"/><path class="fr-6pqe2i"/><path clip-rule="evenodd" class="npxsi1bzj"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:knive-fork-off",
	});
}

export default Component;
