import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so-2c2wtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so-2c2wtc"/>`,
		"fallback": "withicons:rows-gloss",
	});
}

export default Component;
