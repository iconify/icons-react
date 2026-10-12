import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8wenfbcs.css';
import '../../css/o/o4xm8u5yr.css';
import '../../css/a/a9k_5nb9t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8wenfbcs"/><path class="o4xm8u5yr"/><path class="a9k_5nb9t"/>`,
		"fallback": "garden:person-pencil-stroke-20",
	});
}

export default Component;
