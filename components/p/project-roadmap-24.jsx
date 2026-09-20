import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqq61kbnt.css';
import '../../css/t/tbcp7-bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqq61kbnt"/><path class="tbcp7-bab"/>`,
		"fallback": "octicon:project-roadmap-24",
	});
}

export default Component;
