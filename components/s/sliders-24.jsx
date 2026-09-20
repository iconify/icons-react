import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox2enz3rd.css';
import '../../css/g/gycyi0r7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox2enz3rd"/><path class="gycyi0r7k"/>`,
		"fallback": "octicon:sliders-24",
	});
}

export default Component;
