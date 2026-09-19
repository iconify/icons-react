import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtqm8qbsk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtqm8qbsk"/>`,
		"fallback": "f7:textformat-abc",
	});
}

export default Component;
