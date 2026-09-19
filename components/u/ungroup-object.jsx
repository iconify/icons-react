import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afv9dwb5c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afv9dwb5c"/>`,
		"fallback": "fluent-mdl2:ungroup-object",
	});
}

export default Component;
