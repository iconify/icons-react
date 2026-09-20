import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvg3bgb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvg3bgb4r"/>`,
		"fallback": "tabler:plant",
	});
}

export default Component;
