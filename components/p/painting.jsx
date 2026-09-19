import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5663798n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5663798n"/>`,
		"fallback": "whh:painting",
	});
}

export default Component;
