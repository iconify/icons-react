import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anu-u3t_b.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anu-u3t_b"/>`,
		"fallback": "fluent-mdl2:report-lock",
	});
}

export default Component;
