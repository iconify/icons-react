import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaa4jc92m.css';
import '../../css/g/g2fn-72eb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaa4jc92m"/><path clip-rule="evenodd" class="g2fn-72eb"/>`,
		"fallback": "teenyicons:invoice-solid",
	});
}

export default Component;
