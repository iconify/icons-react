import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc_8fq-co.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc_8fq-co"/>`,
		"fallback": "subway:join-corner-arrow-6",
	});
}

export default Component;
