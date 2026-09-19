import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq41pieit.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq41pieit"/>`,
		"fallback": "fluent-mdl2:snap-to-grid",
	});
}

export default Component;
