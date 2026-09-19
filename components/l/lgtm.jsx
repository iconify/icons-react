import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2n357b3j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2n357b3j"/>`,
		"fallback": "cib:lgtm",
	});
}

export default Component;
