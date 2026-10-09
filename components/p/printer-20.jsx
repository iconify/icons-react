import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9m217b_a.css';
import '../../css/a/azvvpmbsy.css';
import '../../css/h/hk39bac5y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9m217b_a"/><path class="azvvpmbsy"/><path class="hk39bac5y"/>`,
		"fallback": "energy-icons:printer-20",
	});
}

export default Component;
