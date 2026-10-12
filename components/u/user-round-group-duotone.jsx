import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5-0qidwg.css';
import '../../css/g/gbiqb30yi.css';
import '../../css/g/gdb3xy4gp.css';
import '../../css/o/o7p2lpe4w.css';
import '../../css/r/ra_68ob6h.css';
import '../../css/q/qq4_y-bsz.css';
import '../../css/n/ny-ldib7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5-0qidwg"/><path class="gbiqb30yi"/><path class="gdb3xy4gp"/><path class="o7p2lpe4w"/><path class="ra_68ob6h"/><path class="qq4_y-bsz"/><path class="ny-ldib7r"/></g>`,
		"fallback": "lucide-extended:user-round-group-duotone",
	});
}

export default Component;
