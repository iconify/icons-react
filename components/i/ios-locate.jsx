import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwlq_8b3i.css';
import '../../css/r/roy4gvbpv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwlq_8b3i"/><path class="roy4gvbpv"/>`,
		"fallback": "ion:ios-locate",
	});
}

export default Component;
