import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-jpj73bt.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-jpj73bt"/>`,
		"fallback": "picon:todo",
	});
}

export default Component;
