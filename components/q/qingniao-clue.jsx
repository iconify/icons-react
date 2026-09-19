import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shfrclbgd.css';
import '../../css/q/q6p-x2blr.css';
import '../../css/o/okx76p-5g.css';
import '../../css/d/d9b0gub2o.css';
import '../../css/u/ug997tm-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="shfrclbgd"/><path clip-rule="evenodd" class="q6p-x2blr"/><path clip-rule="evenodd" class="okx76p-5g"/><path class="d9b0gub2o"/><path clip-rule="evenodd" class="ug997tm-v"/></g>`,
		"fallback": "icon-park:qingniao-clue",
	});
}

export default Component;
