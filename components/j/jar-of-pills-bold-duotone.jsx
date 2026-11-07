import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/y/ybg_29aft.css';
import '../../css/e/e0oiq1b4b.css';
import '../../css/w/w3j-z3ftz.css';
import '../../css/i/i4-0flbdu.css';
import '../../css/t/t3h20kb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="ybg_29aft"/><path class="e0oiq1b4b"/></g><path class="w3j-z3ftz"/><path class="i4-0flbdu"/><path class="t3h20kb9k"/>`,
		"fallback": "solar:jar-of-pills-bold-duotone",
	});
}

export default Component;
