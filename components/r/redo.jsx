import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a9dvt6b-h.css';
import '../../css/z/zjijrobmv.css';
import '../../css/r/r47-yrbvk.css';
import '../../css/e/efki5bb8h.css';
import '../../css/f/f5pzmhyvp.css';
import '../../css/g/gz3kls-hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="a9dvt6b-h wm-shadow"/><path class="zjijrobmv"/><path class="r47-yrbvk"/><path class="efki5bb8h"/><path class="f5pzmhyvp wm-shine"/><path class="gz3kls-hq wm-deco"/></g>`,
		"fallback": "withicons-sticker:redo",
	});
}

export default Component;
