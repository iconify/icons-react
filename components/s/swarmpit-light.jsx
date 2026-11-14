import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbt5dq_hr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbt5dq_hr"/>`,
		"fallback": "selfhst:swarmpit-light",
	});
}

export default Component;
