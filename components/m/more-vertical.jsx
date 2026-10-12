import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnnhigb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnnhigb3o"/>`,
		"fallback": "andrsrxn:more-vertical",
	});
}

export default Component;
