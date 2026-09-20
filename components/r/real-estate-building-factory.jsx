import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t02gsl99c.css';
import '../../css/i/ipce-91ks.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t02gsl99c"/><path class="ipce-91ks"/>`,
		"fallback": "streamline-pixel:real-estate-building-factory",
	});
}

export default Component;
