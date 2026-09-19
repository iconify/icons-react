import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e9zrj7dff.css';
import '../../css/j/ja2za9vku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e9zrj7dff"/><path clip-rule="evenodd" class="ja2za9vku"/></g>`,
		"fallback": "healthicons:palliative-care-24px",
	});
}

export default Component;
