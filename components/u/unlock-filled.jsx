import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd6ai1bvf.css';
import '../../css/y/yfgyogn5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="jd6ai1bvf"/><path clip-rule="evenodd" class="yfgyogn5d"/>`,
		"fallback": "bitcoin-icons:unlock-filled",
	});
}

export default Component;
