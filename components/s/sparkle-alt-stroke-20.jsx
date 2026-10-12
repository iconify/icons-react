import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqkp5ilzt.css';
import '../../css/z/zy3ocbcvy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqkp5ilzt"/><path class="zy3ocbcvy"/>`,
		"fallback": "garden:sparkle-alt-stroke-20",
	});
}

export default Component;
