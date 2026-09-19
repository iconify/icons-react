import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4mii_bgs.css';
import '../../css/m/md286fbip.css';
import '../../css/d/devv6ob4x.css';
import '../../css/f/fo-08g2fu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="e4mii_bgs"/><g class="md286fbip"><path class="devv6ob4x"/><path class="fo-08g2fu"/></g></g>`,
		"fallback": "cryptocurrency-color:ryo",
	});
}

export default Component;
