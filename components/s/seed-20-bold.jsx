import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs1cxybvq.css';
import '../../css/v/v692yrxpi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs1cxybvq"/><path class="v692yrxpi"/>`,
		"fallback": "energy-icons:seed-20-bold",
	});
}

export default Component;
