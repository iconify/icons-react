import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-z4_hb7l.css';
import '../../css/o/oxwyg8bmt.css';
import '../../css/r/r0sby3b4c.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/o/osanvnb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-z4_hb7l"/><path class="oxwyg8bmt"/><path class="r0sby3b4c"/><path class="g4vvtk_cw"/><path class="osanvnb5q"/></g>`,
		"fallback": "lucide-extended:loader-pinwheel-duotone",
	});
}

export default Component;
