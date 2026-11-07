import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de4w5bjhn.css';
import '../../css/h/h6vym3bzz.css';
import '../../css/s/s_j32c9mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de4w5bjhn"/><path clip-rule="evenodd" class="h6vym3bzz"/><path clip-rule="evenodd" class="s_j32c9mx"/>`,
		"fallback": "solar:phone-calling-rounded-outline",
	});
}

export default Component;
