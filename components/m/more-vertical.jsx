import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkdp2-btv.css';
import '../../css/g/g9wjd3b3c.css';
import '../../css/t/t6vzpjbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkdp2-btv"/><path class="g9wjd3b3c"/><path class="t6vzpjbvb"/>`,
		"fallback": "withicons-bauhaus:more-vertical",
	});
}

export default Component;
