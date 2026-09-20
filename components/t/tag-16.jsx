import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sacw0r6yp.css';
import '../../css/g/g09vuxbqo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sacw0r6yp"/><path clip-rule="evenodd" class="g09vuxbqo"/>`,
		"fallback": "qlementine-icons:tag-16",
	});
}

export default Component;
