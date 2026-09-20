import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz9mvhbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz9mvhbjy"/>`,
		"fallback": "streamline-ultimate:shrink-bold",
	});
}

export default Component;
