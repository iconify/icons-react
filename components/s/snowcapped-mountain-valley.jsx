import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq_mdu9mg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq_mdu9mg"/>`,
		"fallback": "pinhead:snowcapped-mountain-valley",
	});
}

export default Component;
