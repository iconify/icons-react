import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brwl6cbif.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brwl6cbif"/>`,
		"fallback": "fluent-mdl2:remove-occurrence",
	});
}

export default Component;
