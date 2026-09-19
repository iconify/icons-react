import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9pl44bnp.css';
import '../../css/v/v6o4n97rm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="v9pl44bnp"/><path class="v6o4n97rm"/></g>`,
		"fallback": "cryptocurrency-color:tnt",
	});
}

export default Component;
