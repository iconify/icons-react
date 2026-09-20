import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/w/wp_t_lhzr.css';
import '../../css/z/zg7blmbnp.css';
import '../../css/i/iazqm-bml.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGLPdB9fiN"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="wp_t_lhzr"/><path class="zg7blmbnp"/><path class="iazqm-bml"/></g></mask></defs><circle mask="url(#SVGLPdB9fiN)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:raise-hand-circle-filled",
	});
}

export default Component;
