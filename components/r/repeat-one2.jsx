import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty0iyhc9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ty0iyhc9m"/>`,
		"fallback": "reicon:repeat-one2",
	});
}

export default Component;
