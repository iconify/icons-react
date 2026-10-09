import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjc1-ubhn.css';
import '../../css/w/wtz7xm9oe.css';
import '../../css/x/x9f35ubbf.css';
import '../../css/f/f4g37sbnb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjc1-ubhn"/><path class="wtz7xm9oe"/><path class="x9f35ubbf"/><path class="f4g37sbnb"/>`,
		"fallback": "energy-icons:port-20",
	});
}

export default Component;
