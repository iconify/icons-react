import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfo-57b0c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfo-57b0c"/>`,
		"fallback": "fluent-mdl2:java-script-language",
	});
}

export default Component;
