import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zheuj0y8t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zheuj0y8t"/>`,
		"fallback": "pinhead:person-hanging-from-pull-up-bar",
	});
}

export default Component;
