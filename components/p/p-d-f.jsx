import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/busl-3uwt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="busl-3uwt"/>`,
		"fallback": "fluent-mdl2:p-d-f",
	});
}

export default Component;
