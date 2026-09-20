import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbjprlb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jbjprlb4w"/>`,
		"fallback": "reicon:tag3-filled",
	});
}

export default Component;
