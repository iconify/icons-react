import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdbum9ggv.css';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/g_iyx94qa.css';
import '../../css/o/o6-twqc6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG8JtNrbdz" class="zdbum9ggv"/></defs><mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="g_iyx94qa"/><use href="#SVG8JtNrbdz"/><use href="#SVG8JtNrbdz"/><path class="o6-twqc6o"/></g>`,
		"fallback": "circle-flags:tk",
	});
}

export default Component;
