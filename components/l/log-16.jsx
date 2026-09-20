import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stf__337k.css';
import '../../css/y/yjte_gbqh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stf__337k"/><path class="yjte_gbqh"/>`,
		"fallback": "octicon:log-16",
	});
}

export default Component;
