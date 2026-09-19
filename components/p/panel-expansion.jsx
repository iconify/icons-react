import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj6it4upb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj6it4upb"/>`,
		"fallback": "carbon:panel-expansion",
	});
}

export default Component;
