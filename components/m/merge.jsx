import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsy0fcbgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsy0fcbgt"/>`,
		"fallback": "noviair-light:merge",
	});
}

export default Component;
