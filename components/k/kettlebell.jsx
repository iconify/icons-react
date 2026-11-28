import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg2p0hbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg2p0hbrz"/>`,
		"fallback": "noviair:kettlebell",
	});
}

export default Component;
