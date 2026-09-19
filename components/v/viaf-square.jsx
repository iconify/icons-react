import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofmkj9b5m.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofmkj9b5m"/>`,
		"fallback": "academicons:viaf-square",
	});
}

export default Component;
