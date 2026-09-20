import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bepzpz4hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bepzpz4hp"/>`,
		"fallback": "thesvg-color:typo3",
	});
}

export default Component;
