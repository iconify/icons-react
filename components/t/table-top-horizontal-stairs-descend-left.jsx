import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzk9z5ksk.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzk9z5ksk"/>`,
		"fallback": "memory:table-top-horizontal-stairs-descend-left",
	});
}

export default Component;
