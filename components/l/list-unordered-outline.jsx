import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hom7et23z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hom7et23z"/>`,
		"fallback": "teenyicons:list-unordered-outline",
	});
}

export default Component;
