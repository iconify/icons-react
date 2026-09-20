import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eu47wd2bq.css';
import '../../css/w/wd-i7utqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="eu47wd2bq"/><path vector-effect="non-scaling-stroke" class="wd-i7utqo"/></g>`,
		"fallback": "wordpress:rss",
	});
}

export default Component;
