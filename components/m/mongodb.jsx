import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzwts81us.css';

const viewBox = {"width":576,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzwts81us"/>`,
		"fallback": "whh:mongodb",
	});
}

export default Component;
