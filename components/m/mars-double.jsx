import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyo01_bzg.css';

const viewBox = {"width":1920,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyo01_bzg"/>`,
		"fallback": "fa:mars-double",
	});
}

export default Component;
