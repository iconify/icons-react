import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elywwxo3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elywwxo3y"/>`,
		"fallback": "streamline-ultimate:water-straw-bold",
	});
}

export default Component;
