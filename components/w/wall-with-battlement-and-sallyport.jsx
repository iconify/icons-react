import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3h0hpbxh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3h0hpbxh"/>`,
		"fallback": "pinhead:wall-with-battlement-and-sallyport",
	});
}

export default Component;
