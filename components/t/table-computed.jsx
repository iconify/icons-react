import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiftl3blj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiftl3blj"/>`,
		"fallback": "fluent-mdl2:table-computed",
	});
}

export default Component;
