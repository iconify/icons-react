import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go11_ybvc.css';
import '../../css/m/md286fbip.css';
import '../../css/l/let265b9v.css';
import '../../css/z/zyet96blb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="go11_ybvc"/><g class="md286fbip"><path class="let265b9v"/><path class="zyet96blb"/></g></g>`,
		"fallback": "cryptocurrency-color:tgch",
	});
}

export default Component;
