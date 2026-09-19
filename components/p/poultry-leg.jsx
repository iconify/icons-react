import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg07p0czo.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg07p0czo"/>`,
		"fallback": "f7:poultry-leg",
	});
}

export default Component;
