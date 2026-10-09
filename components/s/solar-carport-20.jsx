import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skan8zbga.css';
import '../../css/w/w879yqieg.css';
import '../../css/g/g5cv3vban.css';
import '../../css/u/uxaudcccd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skan8zbga"/><path class="w879yqieg"/><path class="g5cv3vban"/><path class="uxaudcccd"/>`,
		"fallback": "energy-icons:solar-carport-20",
	});
}

export default Component;
