import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf-1zmb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf-1zmb7t"/>`,
		"fallback": "simple-icons:red",
	});
}

export default Component;
