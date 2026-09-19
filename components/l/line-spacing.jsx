import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eofxic5-m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eofxic5-m"/>`,
		"fallback": "fluent-mdl2:line-spacing",
	});
}

export default Component;
