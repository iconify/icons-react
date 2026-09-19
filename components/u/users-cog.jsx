import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s61ur2bgv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s61ur2bgv"/>`,
		"fallback": "fa7-solid:users-cog",
	});
}

export default Component;
