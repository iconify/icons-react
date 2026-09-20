import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3_m4jflw.css';
import '../../css/a/aaznl0b5w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3_m4jflw"/><path class="aaznl0b5w"/>`,
		"fallback": "teenyicons:vue-solid",
	});
}

export default Component;
