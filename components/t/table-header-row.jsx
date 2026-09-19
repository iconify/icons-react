import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6d51bbmt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6d51bbmt"/>`,
		"fallback": "fluent-mdl2:table-header-row",
	});
}

export default Component;
