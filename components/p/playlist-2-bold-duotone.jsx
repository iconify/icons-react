import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1_y72bar.css';
import '../../css/b/b-ei31biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n1_y72bar"/><path class="b-ei31biy"/>`,
		"fallback": "solar:playlist-2-bold-duotone",
	});
}

export default Component;
