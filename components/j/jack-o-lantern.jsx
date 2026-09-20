import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlkpbe_sc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlkpbe_sc"/>`,
		"fallback": "pinhead:jack-o-lantern",
	});
}

export default Component;
