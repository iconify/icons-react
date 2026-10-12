import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/packvzbps.css';
import '../../css/n/nex76-inj.css';
import '../../css/t/tz--tdn4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="packvzbps"/><path class="nex76-inj"/><path class="tz--tdn4r"/></g>`,
		"fallback": "lucide-extended:square-pen-duotone",
	});
}

export default Component;
