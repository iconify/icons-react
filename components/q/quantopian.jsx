import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp7js-igc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp7js-igc"/>`,
		"fallback": "cib:quantopian",
	});
}

export default Component;
