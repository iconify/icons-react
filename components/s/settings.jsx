import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk3ftabft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk3ftabft"/>`,
		"fallback": "noviair:settings",
	});
}

export default Component;
