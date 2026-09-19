import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw7kt4bju.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw7kt4bju"/>`,
		"fallback": "fluent-mdl2:read-out-loud",
	});
}

export default Component;
