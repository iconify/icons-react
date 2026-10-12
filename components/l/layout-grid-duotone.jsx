import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lo81jcbax.css';
import '../../css/f/fpv1krh2n.css';
import '../../css/r/rep89yb0q.css';
import '../../css/t/td0f9bl5n.css';
import '../../css/z/zpni-_b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lo81jcbax"/><path class="fpv1krh2n"/><path class="rep89yb0q"/><path class="td0f9bl5n"/><path class="zpni-_b-h"/></g>`,
		"fallback": "lucide-extended:layout-grid-duotone",
	});
}

export default Component;
