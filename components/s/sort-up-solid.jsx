import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q63--4k9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q63--4k9i"/>`,
		"fallback": "la:sort-up-solid",
	});
}

export default Component;
