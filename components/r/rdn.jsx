import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aue3nn3gu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aue3nn3gu"/>`,
		"fallback": "cryptocurrency:rdn",
	});
}

export default Component;
