import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lq-4ydbfu.css';
import '../../css/t/tkjktxqan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lq-4ydbfu"/><path class="tkjktxqan"/></g>`,
		"fallback": "si:rocket-duotone",
	});
}

export default Component;
