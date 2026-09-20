import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un2jr5b5x.css';
import '../../css/u/u6c0nebia.css';
import '../../css/m/m6vv16rhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un2jr5b5x"/><path class="u6c0nebia"/><path class="m6vv16rhx"/>`,
		"fallback": "uim:signal-alt-3",
	});
}

export default Component;
