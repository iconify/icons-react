import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ityz56bdc.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ityz56bdc"/>`,
		"fallback": "wi:thermometer-internal",
	});
}

export default Component;
