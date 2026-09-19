import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whars2o0o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whars2o0o"/>`,
		"fallback": "carbon:rotate-360",
	});
}

export default Component;
