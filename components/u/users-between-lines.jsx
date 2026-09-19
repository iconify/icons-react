import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trcf_86qa.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trcf_86qa"/>`,
		"fallback": "fa6-solid:users-between-lines",
	});
}

export default Component;
