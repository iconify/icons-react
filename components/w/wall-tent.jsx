import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpz043b_p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpz043b_p"/>`,
		"fallback": "pinhead:wall-tent",
	});
}

export default Component;
