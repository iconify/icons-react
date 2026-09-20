import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imduh9bzt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="imduh9bzt"/>`,
		"fallback": "streamline:rss-symbol-solid",
	});
}

export default Component;
