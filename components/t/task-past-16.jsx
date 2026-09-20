import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5-y49b9d.css';
import '../../css/b/bu7krvb8k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x5-y49b9d"/><path clip-rule="evenodd" class="bu7krvb8k"/>`,
		"fallback": "qlementine-icons:task-past-16",
	});
}

export default Component;
