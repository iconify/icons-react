import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfbx6odob.css';
import '../../css/r/r7sd-ibvw.css';
import '../../css/h/hrqt4gbvi.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfbx6odob"/><circle class="r7sd-ibvw"/><path class="hrqt4gbvi"/>`,
		"fallback": "iwwa:thermometer",
	});
}

export default Component;
