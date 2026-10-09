import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcwdncb4h.css';
import '../../css/t/to1elzbsg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcwdncb4h"/><path class="to1elzbsg"/>`,
		"fallback": "energy-icons:link-20",
	});
}

export default Component;
