import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj67-cbkl.css';
import '../../css/g/gpayj6yuu.css';
import '../../css/o/odhhf9bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj67-cbkl"/><path class="gpayj6yuu"/><path class="odhhf9bve"/>`,
		"fallback": "pixel:reddit",
	});
}

export default Component;
