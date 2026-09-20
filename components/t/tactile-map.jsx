import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra19rmbjq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra19rmbjq"/>`,
		"fallback": "roentgen:tactile-map",
	});
}

export default Component;
