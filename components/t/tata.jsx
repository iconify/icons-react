import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwtj_x3al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwtj_x3al"/>`,
		"fallback": "simple-icons:tata",
	});
}

export default Component;
