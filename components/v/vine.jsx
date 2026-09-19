import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_ud-v2xr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_ud-v2xr"/>`,
		"fallback": "entypo-social:vine",
	});
}

export default Component;
