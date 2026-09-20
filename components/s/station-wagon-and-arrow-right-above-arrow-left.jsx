import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_6sc8w-h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_6sc8w-h"/>`,
		"fallback": "pinhead:station-wagon-and-arrow-right-above-arrow-left",
	});
}

export default Component;
