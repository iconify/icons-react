import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk5hyp-iw.css';
import '../../css/u/ua94ilb2u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk5hyp-iw"/><path class="ua94ilb2u"/>`,
		"fallback": "octicon:issue-tracks-16",
	});
}

export default Component;
