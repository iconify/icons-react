import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smod414ny.css';
import '../../css/o/ol4ckq3wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smod414ny"/><path class="ol4ckq3wi"/>`,
		"fallback": "octicon:log-24",
	});
}

export default Component;
