import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_opwzr2w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_opwzr2w"/>`,
		"fallback": "fluent-mdl2:rewind",
	});
}

export default Component;
