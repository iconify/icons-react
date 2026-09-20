import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt32cgb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt32cgb5w"/>`,
		"fallback": "mingcute:upload-line",
	});
}

export default Component;
