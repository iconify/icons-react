import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hax53gbsh.css';
import '../../css/h/hb4lzh0lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hax53gbsh"/><path class="hb4lzh0lj"/>`,
		"fallback": "mage:trophy-circle-fill",
	});
}

export default Component;
