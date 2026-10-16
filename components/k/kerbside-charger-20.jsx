import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq9167bja.css';
import '../../css/m/m744oxfrh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq9167bja"/><path class="m744oxfrh"/>`,
		"fallback": "energy-icons:kerbside-charger-20",
	});
}

export default Component;
