import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3f2oybgw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3f2oybgw"/>`,
		"fallback": "icomoon-free:tree",
	});
}

export default Component;
