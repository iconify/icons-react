import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug37mwq9i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug37mwq9i"/>`,
		"fallback": "thesvg-color:mayo-clinic",
	});
}

export default Component;
