import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlpkc4bvw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlpkc4bvw"/>`,
		"fallback": "fluent-mdl2:page-list-mirrored-solid",
	});
}

export default Component;
