import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-n99mbgf.css';
import '../../css/a/atk21rbkq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-n99mbgf"/><ellipse class="atk21rbkq"/>`,
		"fallback": "nimbus:printer",
	});
}

export default Component;
