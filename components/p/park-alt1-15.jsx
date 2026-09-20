import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eif-8lxuc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eif-8lxuc"/>`,
		"fallback": "maki:park-alt1-15",
	});
}

export default Component;
