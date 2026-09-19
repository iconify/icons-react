import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8na0-o0o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8na0-o0o"/>`,
		"fallback": "fluent-mdl2:save-as",
	});
}

export default Component;
