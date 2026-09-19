import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acb0atomk.css';
import '../../css/g/gb7o9bbig.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acb0atomk"/><path class="gb7o9bbig"/>`,
		"fallback": "carbon:text-small-caps",
	});
}

export default Component;
