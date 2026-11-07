import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl66i7bqg.css';
import '../../css/j/j_45oebel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cl66i7bqg"/><path class="j_45oebel"/>`,
		"fallback": "solar:minimalistic-magnifier-bold-duotone",
	});
}

export default Component;
