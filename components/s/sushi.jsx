import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6q8gwb1h.css';
import '../../css/k/k6dzamvnj.css';
import '../../css/u/uc0jhbc1o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6q8gwb1h"/><path class="k6dzamvnj"/><path class="uc0jhbc1o"/>`,
		"fallback": "openmoji:sushi",
	});
}

export default Component;
