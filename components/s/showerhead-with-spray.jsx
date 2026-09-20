import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se_7ygblx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se_7ygblx"/>`,
		"fallback": "pinhead:showerhead-with-spray",
	});
}

export default Component;
