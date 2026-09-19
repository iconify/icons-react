import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyolq2bek.css';
import '../../css/c/c_71ubcpr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="vyolq2bek"/><path class="c_71ubcpr"/>`,
		"fallback": "ion:journal-outline",
	});
}

export default Component;
