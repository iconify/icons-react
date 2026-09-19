import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh1wzjl_k.css';

const viewBox = {"width":825,"height":667};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh1wzjl_k"/>`,
		"fallback": "ls:w",
	});
}

export default Component;
