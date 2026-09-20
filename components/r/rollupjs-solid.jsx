import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_avgdczx.css';
import '../../css/k/kc709bcob.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_avgdczx"/><path class="kc709bcob"/>`,
		"fallback": "teenyicons:rollupjs-solid",
	});
}

export default Component;
