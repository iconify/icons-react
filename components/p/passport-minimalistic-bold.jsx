import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqeyqsb0i.css';
import '../../css/n/nn7oqiafx.css';
import '../../css/v/vfk2nmbnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqeyqsb0i"/><path class="nn7oqiafx"/><path clip-rule="evenodd" class="vfk2nmbnn"/>`,
		"fallback": "solar:passport-minimalistic-bold",
	});
}

export default Component;
