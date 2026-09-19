import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lswr9wrdr.css';
import '../../css/u/unos9unxq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lswr9wrdr"/><path class="unos9unxq"/>`,
		"fallback": "carbon:notebook-reference",
	});
}

export default Component;
