import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3eseacbm.css';
import '../../css/n/nc_t_0bbz.css';
import '../../css/a/avq41vbrm.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3eseacbm"/><path class="nc_t_0bbz"/><path class="avq41vbrm"/>`,
		"fallback": "thesvg-color:pocketbase",
	});
}

export default Component;
