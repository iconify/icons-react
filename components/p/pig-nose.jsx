import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mok2mu1du.css';
import '../../css/n/nn6sf7onp.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/e/e5-abimnh.css';
import '../../css/e/ey_vi45as.css';
import '../../css/w/w7wf9plwj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mok2mu1du"/><path class="nn6sf7onp"/><g class="jn8qy4bru"><path class="e5-abimnh"/><ellipse transform="rotate(-70.567 22.327 41.023)" class="ey_vi45as"/><ellipse transform="rotate(-19.433 51.671 41.017)" class="w7wf9plwj"/></g>`,
		"fallback": "openmoji:pig-nose",
	});
}

export default Component;
