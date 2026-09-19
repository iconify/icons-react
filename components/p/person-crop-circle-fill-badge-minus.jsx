import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlyst4b4y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlyst4b4y"/>`,
		"fallback": "f7:person-crop-circle-fill-badge-minus",
	});
}

export default Component;
