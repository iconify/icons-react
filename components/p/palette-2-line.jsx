import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggdj-rbkr.css';
import '../../css/d/d4aj_070k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggdj-rbkr"/><circle class="d4aj_070k"/>`,
		"fallback": "mingcute:palette-2-line",
	});
}

export default Component;
