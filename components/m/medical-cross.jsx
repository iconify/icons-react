import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiu326fvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiu326fvj"/>`,
		"fallback": "noviair-light:medical-cross",
	});
}

export default Component;
