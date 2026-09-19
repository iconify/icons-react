import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf9byy3ul.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf9byy3ul"/>`,
		"fallback": "fluent-mdl2:waving-hand",
	});
}

export default Component;
