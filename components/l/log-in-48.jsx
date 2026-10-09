import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b49o_bc6g.css';
import '../../css/b/bbwnydn9j.css';
import '../../css/q/qj6pinbyz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b49o_bc6g"/><path class="bbwnydn9j"/><path class="qj6pinbyz"/>`,
		"fallback": "energy-icons:log-in-48",
	});
}

export default Component;
