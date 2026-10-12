import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkfscribz.css';
import '../../css/e/epuqqhiuz.css';
import '../../css/b/bis6shb4l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkfscribz"/><path class="epuqqhiuz"/><path class="bis6shb4l"/>`,
		"fallback": "garden:sun-stroke-20",
	});
}

export default Component;
