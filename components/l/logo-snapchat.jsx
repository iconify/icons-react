import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrpo3ub4o.css';
import '../../css/j/jk5lh3bsw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrpo3ub4o"/><path class="jk5lh3bsw"/>`,
		"fallback": "carbon:logo-snapchat",
	});
}

export default Component;
