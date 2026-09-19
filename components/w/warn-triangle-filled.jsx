import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leqet9sky.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leqet9sky"/>`,
		"fallback": "ep:warn-triangle-filled",
	});
}

export default Component;
