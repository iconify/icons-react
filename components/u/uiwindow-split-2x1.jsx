import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo3ndbcqi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo3ndbcqi"/>`,
		"fallback": "f7:uiwindow-split-2x1",
	});
}

export default Component;
