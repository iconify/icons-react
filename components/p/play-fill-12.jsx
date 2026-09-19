import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfd3q5bgt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfd3q5bgt"/>`,
		"fallback": "garden:play-fill-12",
	});
}

export default Component;
