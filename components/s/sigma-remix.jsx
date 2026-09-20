import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqmv-acbz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqmv-acbz"/>`,
		"fallback": "streamline:sigma-remix",
	});
}

export default Component;
