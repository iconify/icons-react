import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9frh8pyw.css';
import '../../css/i/i2fpxzbyu.css';
import '../../css/z/z8_xk9jlf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9frh8pyw"/><path class="i2fpxzbyu"/><path class="z8_xk9jlf"/>`,
		"fallback": "energy-icons:lightning-protection-48-bold",
	});
}

export default Component;
