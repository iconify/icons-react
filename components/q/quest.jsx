import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1bdj-_1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1bdj-_1f"/>`,
		"fallback": "simple-icons:quest",
	});
}

export default Component;
