import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k69vfgy3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k69vfgy3g"/>`,
		"fallback": "noviair:smartphone",
	});
}

export default Component;
