import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtb4bninq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtb4bninq"/>`,
		"fallback": "material-icon-theme:nim",
	});
}

export default Component;
