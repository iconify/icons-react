import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scpdkmq3k.css';
import '../../css/y/yst55_15i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scpdkmq3k"/><path class="yst55_15i"/>`,
		"fallback": "material-icon-theme:verilog",
	});
}

export default Component;
