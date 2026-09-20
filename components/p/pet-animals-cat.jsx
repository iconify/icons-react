import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwkj2k1fw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwkj2k1fw"/>`,
		"fallback": "streamline-pixel:pet-animals-cat",
	});
}

export default Component;
