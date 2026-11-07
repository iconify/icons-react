import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqeyqsb0i.css';
import '../../css/d/dek9bkq9j.css';
import '../../css/s/svjtfbbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqeyqsb0i"/><path class="dek9bkq9j"/><path clip-rule="evenodd" class="svjtfbbmh"/>`,
		"fallback": "solar:passport-bold",
	});
}

export default Component;
