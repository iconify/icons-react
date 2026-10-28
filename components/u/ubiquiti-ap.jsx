import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g09n5j3dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g09n5j3dm"/>`,
		"fallback": "cbi:ubiquiti-ap",
	});
}

export default Component;
