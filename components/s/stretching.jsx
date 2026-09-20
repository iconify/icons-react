import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huk7mmbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huk7mmbrv"/>`,
		"fallback": "tabler:stretching",
	});
}

export default Component;
