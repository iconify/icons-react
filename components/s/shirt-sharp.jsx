import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6-v5-b8g.css';
import '../../css/s/spmrb2bwo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6-v5-b8g"/><path class="spmrb2bwo"/>`,
		"fallback": "famicons:shirt-sharp",
	});
}

export default Component;
