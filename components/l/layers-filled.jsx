import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9m0gbckt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9m0gbckt"/>`,
		"fallback": "tdesign:layers-filled",
	});
}

export default Component;
