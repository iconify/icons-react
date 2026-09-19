import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zafa9olsx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zafa9olsx"/>`,
		"fallback": "fluent-mdl2:numbered-list-text-mirrored",
	});
}

export default Component;
