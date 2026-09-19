import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1n-b7bkv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1n-b7bkv"/>`,
		"fallback": "devicon-plain:typo3-wordmark",
	});
}

export default Component;
