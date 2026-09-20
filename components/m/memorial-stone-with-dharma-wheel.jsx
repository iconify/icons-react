import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4p8k-bav.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4p8k-bav"/>`,
		"fallback": "pinhead:memorial-stone-with-dharma-wheel",
	});
}

export default Component;
