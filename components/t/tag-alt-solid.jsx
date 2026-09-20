import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr9dg8bki.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jr9dg8bki"/>`,
		"fallback": "streamline-flex:tag-alt-solid",
	});
}

export default Component;
