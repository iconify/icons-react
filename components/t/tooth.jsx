import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7nc_vb4g.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7nc_vb4g"/>`,
		"fallback": "whh:tooth",
	});
}

export default Component;
