import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scjbovq4n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scjbovq4n"/>`,
		"fallback": "carbon:sales-ops",
	});
}

export default Component;
