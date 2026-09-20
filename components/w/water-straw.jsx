import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lz82yy_8s.css';
import '../../css/j/joi08-bjf.css';
import '../../css/a/a18fncc1r.css';
import '../../css/m/mg8otu75v.css';
import '../../css/h/hyey6ek9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lz82yy_8s"/><path class="joi08-bjf"/><path class="a18fncc1r"/><path class="mg8otu75v"/><path class="hyey6ek9s"/></g>`,
		"fallback": "streamline-ultimate-color:water-straw",
	});
}

export default Component;
