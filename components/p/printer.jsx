import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4yu1bgbf.css';
import '../../css/j/jo-ewmbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4yu1bgbf"/><path class="jo-ewmbkq"/>`,
		"fallback": "bx:printer",
	});
}

export default Component;
