import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa7ad-bhf.css';
import '../../css/u/uf38hibyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa7ad-bhf"/><path class="uf38hibyw"/>`,
		"fallback": "fxemoji:star",
	});
}

export default Component;
