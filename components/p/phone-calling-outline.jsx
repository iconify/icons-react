import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0fbn4bvv.css';
import '../../css/e/ep7a_f12q.css';
import '../../css/z/zii2occby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o0fbn4bvv"/><path class="ep7a_f12q"/><path class="zii2occby"/>`,
		"fallback": "solar:phone-calling-outline",
	});
}

export default Component;
