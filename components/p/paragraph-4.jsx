import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raku_ccrv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raku_ccrv"/>`,
		"fallback": "subway:paragraph-4",
	});
}

export default Component;
