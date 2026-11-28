import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eefz75dzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eefz75dzs"/>`,
		"fallback": "noviair-light:layers-x",
	});
}

export default Component;
