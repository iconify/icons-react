import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc8j9ubrc.css';
import '../../css/u/uxsu2sb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc8j9ubrc"/><path class="uxsu2sb9w"/>`,
		"fallback": "octicon:shield-x-24",
	});
}

export default Component;
