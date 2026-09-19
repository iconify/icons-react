import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/m/m1lt5n8tk.css';
import '../../css/c/cq-p70qeo.css';
import '../../css/c/cr86h_b7s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="m1lt5n8tk"/><path class="cq-p70qeo"/><path class="cr86h_b7s"/></g>`,
		"fallback": "icon-park:turn-off-bluetooth",
	});
}

export default Component;
