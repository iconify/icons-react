import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja56ooacg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja56ooacg"/>`,
		"fallback": "at-icons:spring-joint",
	});
}

export default Component;
