import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq1zmjr3e.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq1zmjr3e"/>`,
		"fallback": "academicons:orcid-square",
	});
}

export default Component;
