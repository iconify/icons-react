import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rde87_mjj.css';
import '../../css/g/g9uw349nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rde87_mjj"/><path class="g9uw349nr"/>`,
		"fallback": "octicon:link-24",
	});
}

export default Component;
