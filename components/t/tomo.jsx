import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r6lhs3g8p.css';
import '../../css/b/bfa18xbqv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="r6lhs3g8p"/><path class="bfa18xbqv"/></g>`,
		"fallback": "cryptocurrency-color:tomo",
	});
}

export default Component;
