import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9nndzbqo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9nndzbqo"/>`,
		"fallback": "roentgen:power-tower-3-level",
	});
}

export default Component;
