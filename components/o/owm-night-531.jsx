import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmvjp89df.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmvjp89df"/>`,
		"fallback": "wi:owm-night-531",
	});
}

export default Component;
