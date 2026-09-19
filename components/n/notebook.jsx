import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg0ptgbvl.css';
import '../../css/y/y6o2cyb_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg0ptgbvl"/><path class="y6o2cyb_z"/>`,
		"fallback": "carbon:notebook",
	});
}

export default Component;
