import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvb61-brs.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvb61-brs"/>`,
		"fallback": "fluent-mdl2:ribbon-solid",
	});
}

export default Component;
