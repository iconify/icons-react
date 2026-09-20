import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwx5zpbpr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwx5zpbpr"/>`,
		"fallback": "maki:marker-stroked",
	});
}

export default Component;
