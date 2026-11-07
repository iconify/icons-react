import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g87wobb9j.css';
import '../../css/n/nbgk0wbrq.css';
import '../../css/d/dj35aibbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g87wobb9j"/><path class="nbgk0wbrq"/><path class="dj35aibbu"/>`,
		"fallback": "solar:people-nearby-bold",
	});
}

export default Component;
