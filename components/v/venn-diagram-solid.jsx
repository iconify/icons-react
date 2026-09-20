import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um0u04m2u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um0u04m2u"/>`,
		"fallback": "teenyicons:venn-diagram-solid",
	});
}

export default Component;
