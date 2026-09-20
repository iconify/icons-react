import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofo5cbhew.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofo5cbhew"/>`,
		"fallback": "wi:moon-alt-waxing-gibbous-3",
	});
}

export default Component;
