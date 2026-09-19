import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrc0clbfg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrc0clbfg"/>`,
		"fallback": "f7:rectangle-fill-on-rectangle-angled-fill",
	});
}

export default Component;
