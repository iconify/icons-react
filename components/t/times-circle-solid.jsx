import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8fq14a_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8fq14a_y"/>`,
		"fallback": "pixel:times-circle-solid",
	});
}

export default Component;
