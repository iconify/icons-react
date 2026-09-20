import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-pg_gpqw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-pg_gpqw"/>`,
		"fallback": "la:portrait-solid",
	});
}

export default Component;
