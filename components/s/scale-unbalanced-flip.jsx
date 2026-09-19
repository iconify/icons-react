import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5hzsjb7y.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5hzsjb7y"/>`,
		"fallback": "fa6-solid:scale-unbalanced-flip",
	});
}

export default Component;
