import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aemrh9b0w.css';
import '../../css/o/oxs71ta2o.css';
import '../../css/y/y00b9ubxh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aemrh9b0w"/><path class="oxs71ta2o"/><path class="y00b9ubxh"/>`,
		"fallback": "streamline-pixel:interface-essential-alarm-bell-off",
	});
}

export default Component;
