import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwhqzbc9j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwhqzbc9j"/>`,
		"fallback": "pinhead:wall-with-battlement",
	});
}

export default Component;
