import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g42vv42gj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g42vv42gj"/>`,
		"fallback": "zondicons:navigation-more",
	});
}

export default Component;
