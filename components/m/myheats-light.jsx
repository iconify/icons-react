import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxzqot-ta.css';
import '../../css/s/szpwprb4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxzqot-ta"/><path class="szpwprb4b"/>`,
		"fallback": "selfhst:myheats-light",
	});
}

export default Component;
