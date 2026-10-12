import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byu4-dbwe.css';
import '../../css/c/cffi7tb7g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byu4-dbwe"/><path class="cffi7tb7g"/>`,
		"fallback": "garden:text-size-20",
	});
}

export default Component;
