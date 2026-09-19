import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shgrc6-hf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shgrc6-hf"/>`,
		"fallback": "f7:person-2-fill",
	});
}

export default Component;
