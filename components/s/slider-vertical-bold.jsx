import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq81qobph.css';
import '../../css/c/cp8pj3bmi.css';
import '../../css/z/zv5zc6bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq81qobph"/><path class="cp8pj3bmi"/><path class="zv5zc6bto"/>`,
		"fallback": "solar:slider-vertical-bold",
	});
}

export default Component;
