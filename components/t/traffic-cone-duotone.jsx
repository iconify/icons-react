import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cg09kibji.css';
import '../../css/e/etwbfpbzw.css';
import '../../css/h/hh5j_-1aw.css';
import '../../css/j/jyrxe4yww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cg09kibji"/><path class="etwbfpbzw"/><path class="hh5j_-1aw"/><path class="jyrxe4yww"/></g>`,
		"fallback": "lucide-extended:traffic-cone-duotone",
	});
}

export default Component;
