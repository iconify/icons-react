import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im0wz2aiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im0wz2aiu"/>`,
		"fallback": "simple-icons:metro",
	});
}

export default Component;
