import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i18l58b6j.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i18l58b6j"/>`,
		"fallback": "ei:sc-youtube",
	});
}

export default Component;
