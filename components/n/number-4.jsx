import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeys6obdo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeys6obdo"/>`,
		"fallback": "carbon:number-4",
	});
}

export default Component;
