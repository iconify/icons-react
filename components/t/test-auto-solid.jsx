import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkq06-bgt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkq06-bgt"/>`,
		"fallback": "fluent-mdl2:test-auto-solid",
	});
}

export default Component;
