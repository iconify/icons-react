import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wthwwi_kt.css';
import '../../css/f/fo6tfetjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wthwwi_kt"/><path class="fo6tfetjy"/></g>`,
		"fallback": "lucide-extended:vector-polygon-duotone",
	});
}

export default Component;
