import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyy6gn3df.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyy6gn3df"/>`,
		"fallback": "cib:matternet",
	});
}

export default Component;
