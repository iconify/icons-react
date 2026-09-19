import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff8_ptq2l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff8_ptq2l"/>`,
		"fallback": "fluent-mdl2:test-beaker",
	});
}

export default Component;
