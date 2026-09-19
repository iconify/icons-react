import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sly2_52gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sly2_52gh"/>`,
		"fallback": "fe:mail",
	});
}

export default Component;
