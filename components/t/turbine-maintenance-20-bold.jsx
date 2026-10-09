import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je7r7lbpm.css';
import '../../css/j/jy5mj2b4j.css';
import '../../css/v/veivehbuo.css';
import '../../css/u/ug19bk4co.css';
import '../../css/p/p70a5nd2b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je7r7lbpm"/><path class="jy5mj2b4j"/><path class="veivehbuo"/><path class="ug19bk4co"/><path class="p70a5nd2b"/>`,
		"fallback": "energy-icons:turbine-maintenance-20-bold",
	});
}

export default Component;
