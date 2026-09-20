import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7arh5b5b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7arh5b5b"/>`,
		"fallback": "pinhead:stone-wall-with-battlement",
	});
}

export default Component;
