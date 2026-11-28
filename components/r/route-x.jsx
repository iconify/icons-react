import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpxy3besi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpxy3besi"/>`,
		"fallback": "noviair-light:route-x",
	});
}

export default Component;
