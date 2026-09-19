import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phl4jebma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phl4jebma"/>`,
		"fallback": "iconoir:threads",
	});
}

export default Component;
