import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drrty8bwe.css';
import '../../css/l/l4pt34etg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drrty8bwe"/><path clip-rule="evenodd" class="l4pt34etg"/>`,
		"fallback": "lineicons:locked-2",
	});
}

export default Component;
