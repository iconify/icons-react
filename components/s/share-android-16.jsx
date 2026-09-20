import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/equ276bxi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="equ276bxi"/>`,
		"fallback": "octicon:share-android-16",
	});
}

export default Component;
