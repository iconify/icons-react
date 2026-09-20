import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsuq6fe6p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rsuq6fe6p"/>`,
		"fallback": "streamline-flex:justice-scale-1-solid",
	});
}

export default Component;
