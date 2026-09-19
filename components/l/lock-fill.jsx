import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enk_bkg6h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enk_bkg6h"/>`,
		"fallback": "f7:lock-fill",
	});
}

export default Component;
