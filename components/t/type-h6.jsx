import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja1pydb0y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja1pydb0y"/>`,
		"fallback": "bi:type-h6",
	});
}

export default Component;
