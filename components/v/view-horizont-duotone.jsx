import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p69es9xsi.css';
import '../../css/o/oi7oh5xgv.css';
import '../../css/u/umm_x8b-p.css';
import '../../css/a/aeyxu9b2r.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZb8TIcFs"><g class="ft5dv1b6b"><path class="p69es9xsi"/><path class="oi7oh5xgv"/><path clip-rule="evenodd" class="umm_x8b-p"/><path class="aeyxu9b2r"/></g></mask></defs><path mask="url(#SVGZb8TIcFs)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:view-horizont-duotone",
	});
}

export default Component;
