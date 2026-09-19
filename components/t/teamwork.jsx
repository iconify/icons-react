import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x32c8nknn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x32c8nknn"/>`,
		"fallback": "fluent-mdl2:teamwork",
	});
}

export default Component;
