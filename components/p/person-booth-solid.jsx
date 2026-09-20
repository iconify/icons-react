import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdttmdz4j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdttmdz4j"/>`,
		"fallback": "la:person-booth-solid",
	});
}

export default Component;
