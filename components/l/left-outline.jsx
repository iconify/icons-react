import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-cvr26ib.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-cvr26ib"/>`,
		"fallback": "lsicon:left-outline",
	});
}

export default Component;
