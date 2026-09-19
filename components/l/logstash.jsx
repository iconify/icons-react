import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es9czvboz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es9czvboz"/>`,
		"fallback": "cib:logstash",
	});
}

export default Component;
