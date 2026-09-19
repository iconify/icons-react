import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl9r37boe.css';
import '../../css/f/fmyd_bcdu.css';
import '../../css/g/gody8syjs.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl9r37boe"/><path class="fmyd_bcdu"/><path class="gody8syjs"/>`,
		"fallback": "devicon:junit-wordmark",
	});
}

export default Component;
