import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeny3cb4v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeny3cb4v"/>`,
		"fallback": "pinhead:sedan-under-list-beside-checkmark",
	});
}

export default Component;
