import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pojn_z1wk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pojn_z1wk"/>`,
		"fallback": "fluent-mdl2:report-hacked",
	});
}

export default Component;
