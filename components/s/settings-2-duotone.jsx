import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dastyi8ad.css';
import '../../css/r/rln9g247b.css';
import '../../css/v/v9-g97b-r.css';
import '../../css/j/jo7gq1cec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dastyi8ad"/><path class="rln9g247b"/><path class="v9-g97b-r"/><path class="jo7gq1cec"/></g>`,
		"fallback": "lucide-extended:settings-2-duotone",
	});
}

export default Component;
