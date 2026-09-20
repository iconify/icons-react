import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b389uu97b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b389uu97b"/>`,
		"fallback": "pinhead:passport-with-netherlands",
	});
}

export default Component;
