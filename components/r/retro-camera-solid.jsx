import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpk6ggg_n.css';
import '../../css/n/ndqxj1bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpk6ggg_n"/><path class="ndqxj1bdz"/>`,
		"fallback": "pixel:retro-camera-solid",
	});
}

export default Component;
