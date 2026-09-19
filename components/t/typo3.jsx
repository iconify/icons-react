import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt0xp9boc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt0xp9boc"/>`,
		"fallback": "cib:typo3",
	});
}

export default Component;
