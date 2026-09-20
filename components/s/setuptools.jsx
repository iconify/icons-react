import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp2spob4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp2spob4z"/>`,
		"fallback": "thesvg-color:setuptools",
	});
}

export default Component;
