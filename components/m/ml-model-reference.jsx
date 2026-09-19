import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtnvolzvt.css';
import '../../css/x/xd2sz9b9o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtnvolzvt"/><path class="xd2sz9b9o"/>`,
		"fallback": "carbon:ml-model-reference",
	});
}

export default Component;
