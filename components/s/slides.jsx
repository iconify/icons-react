import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oet9micqw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oet9micqw"/>`,
		"fallback": "cib:slides",
	});
}

export default Component;
