import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq0uo0wjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq0uo0wjw"/>`,
		"fallback": "bxs:meteor",
	});
}

export default Component;
