import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2zc19bpz.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2zc19bpz"/>`,
		"fallback": "fa-regular:meh",
	});
}

export default Component;
