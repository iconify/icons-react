import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cggeh_puv.css';
import '../../css/l/lx9txg18g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cggeh_puv"/><path class="lx9txg18g"/>`,
		"fallback": "openmoji:small-blue-diamond",
	});
}

export default Component;
