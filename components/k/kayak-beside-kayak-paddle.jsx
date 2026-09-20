import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp59d6b8b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp59d6b8b"/>`,
		"fallback": "pinhead:kayak-beside-kayak-paddle",
	});
}

export default Component;
