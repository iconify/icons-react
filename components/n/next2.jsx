import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf5pf_opx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf5pf_opx"/>`,
		"fallback": "icomoon-free:next2",
	});
}

export default Component;
