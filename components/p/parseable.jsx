import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0p0fbb2l.css';
import '../../css/t/tsx8_8m-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0p0fbb2l"/><path class="tsx8_8m-w"/>`,
		"fallback": "selfhst:parseable",
	});
}

export default Component;
