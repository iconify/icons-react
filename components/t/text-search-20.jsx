import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmqzfdcfq.css';
import '../../css/m/mq74mlbqm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmqzfdcfq"/><path class="mq74mlbqm"/>`,
		"fallback": "energy-icons:text-search-20",
	});
}

export default Component;
