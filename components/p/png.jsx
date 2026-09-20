import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijt2-hgvq.css';
import '../../css/l/lojifgbsh.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijt2-hgvq"/><path class="lojifgbsh"/>`,
		"fallback": "iwwa:png",
	});
}

export default Component;
