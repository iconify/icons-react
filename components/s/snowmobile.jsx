import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt0lgbd7n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt0lgbd7n"/>`,
		"fallback": "map:snowmobile",
	});
}

export default Component;
