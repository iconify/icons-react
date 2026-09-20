import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af-0lpb9m.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af-0lpb9m"/>`,
		"fallback": "wi:owm-221",
	});
}

export default Component;
