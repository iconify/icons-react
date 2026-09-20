import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfeezi7xs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfeezi7xs"/>`,
		"fallback": "streamline:religion-shinto-religion-gate-culture-shinto-japan-japanese-shrine",
	});
}

export default Component;
