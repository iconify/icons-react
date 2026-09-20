import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmuuir_dm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmuuir_dm"/>`,
		"fallback": "streamline-block:text-formatting-strikethrough",
	});
}

export default Component;
