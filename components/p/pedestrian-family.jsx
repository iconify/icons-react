import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj21nobix.css';
import '../../css/l/lt2ak2b5o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj21nobix"/><path class="lt2ak2b5o"/>`,
		"fallback": "carbon:pedestrian-family",
	});
}

export default Component;
