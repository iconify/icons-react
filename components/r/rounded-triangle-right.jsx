import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9t_h3jeq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9t_h3jeq"/>`,
		"fallback": "pinhead:rounded-triangle-right",
	});
}

export default Component;
