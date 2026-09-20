import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm5kf3b5n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm5kf3b5n"/>`,
		"fallback": "roentgen:power-tower-monopolar",
	});
}

export default Component;
