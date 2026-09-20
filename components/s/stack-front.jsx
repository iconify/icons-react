import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lqwj3rblg.css';
import '../../css/o/oza9rwbkn.css';
import '../../css/i/i1-6r6e7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lqwj3rblg"/><path class="oza9rwbkn"/><path class="i1-6r6e7w"/></g>`,
		"fallback": "tabler:stack-front",
	});
}

export default Component;
