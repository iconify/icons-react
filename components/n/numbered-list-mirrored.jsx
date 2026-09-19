import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idz3dobwd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idz3dobwd"/>`,
		"fallback": "fluent-mdl2:numbered-list-mirrored",
	});
}

export default Component;
