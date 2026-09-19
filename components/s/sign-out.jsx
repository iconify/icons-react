import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzskvyx6z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzskvyx6z"/>`,
		"fallback": "charm:sign-out",
	});
}

export default Component;
