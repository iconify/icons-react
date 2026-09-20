import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2-7v0z6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2-7v0z6n"/>`,
		"fallback": "stash:square-solid",
	});
}

export default Component;
