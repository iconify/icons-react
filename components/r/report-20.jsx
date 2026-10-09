import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re0n-jb1b.css';
import '../../css/o/ooz3o6s1d.css';
import '../../css/o/o76rkrbtm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re0n-jb1b"/><path class="ooz3o6s1d"/><path class="o76rkrbtm"/>`,
		"fallback": "energy-icons:report-20",
	});
}

export default Component;
