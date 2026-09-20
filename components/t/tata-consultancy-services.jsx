import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7q3c8i4a.css';

const viewBox = {"width":956.693,"height":342.992};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7q3c8i4a"/>`,
		"fallback": "thesvg-color:tata-consultancy-services",
	});
}

export default Component;
