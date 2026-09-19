import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1qqbqbws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1qqbqbws"/>`,
		"fallback": "cib:skyliner",
	});
}

export default Component;
