import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwn7_2srg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwn7_2srg"/>`,
		"fallback": "osmic:taoist-14",
	});
}

export default Component;
