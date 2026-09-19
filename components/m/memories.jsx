import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy7uvjurt.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy7uvjurt"/>`,
		"fallback": "f7:memories",
	});
}

export default Component;
