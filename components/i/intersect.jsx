import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzxetnbiv.css';
import '../../css/x/xdjatpcmi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzxetnbiv"/><path class="xdjatpcmi"/>`,
		"fallback": "carbon:intersect",
	});
}

export default Component;
