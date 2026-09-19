import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt9rm4bdd.css';

const viewBox = {"width":1664,"height":1344};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt9rm4bdd"/>`,
		"fallback": "vs:timeslot",
	});
}

export default Component;
