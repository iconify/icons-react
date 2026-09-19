import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk_ymsbeh.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk_ymsbeh"/>`,
		"fallback": "fa6-solid:tree",
	});
}

export default Component;
