import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjx4ulw2o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjx4ulw2o"/>`,
		"fallback": "teenyicons:rand-outline",
	});
}

export default Component;
