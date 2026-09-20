import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blowczb_d.css';
import '../../css/e/e4jz-uehp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blowczb_d"/><path class="e4jz-uehp"/>`,
		"fallback": "streamline-block:other-ui-maximize",
	});
}

export default Component;
