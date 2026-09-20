import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2mwzrbfn.css';
import '../../css/q/qu61xsbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2mwzrbfn"/><path class="qu61xsbqh"/>`,
		"fallback": "token:ipor",
	});
}

export default Component;
