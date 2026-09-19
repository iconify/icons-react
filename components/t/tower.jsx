import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gb_tgqb6j.css';
import '../../css/j/j_2lxgbmt.css';
import '../../css/b/b2x3fgbfa.css';
import '../../css/j/jil8u0uzb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="gb_tgqb6j"/><rect class="j_2lxgbmt"/><rect class="b2x3fgbfa"/><path class="jil8u0uzb"/></g>`,
		"fallback": "icon-park:tower",
	});
}

export default Component;
