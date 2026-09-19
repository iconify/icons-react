import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sebvhx9qb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sebvhx9qb"/>`,
		"fallback": "dinkie-icons:otfeature-zero-small-filled",
	});
}

export default Component;
