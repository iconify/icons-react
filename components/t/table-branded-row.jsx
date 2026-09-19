import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g88e3l7_r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g88e3l7_r"/>`,
		"fallback": "fluent-mdl2:table-branded-row",
	});
}

export default Component;
