import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lis884bqb.css';
import '../../css/r/rqjikdywo.css';
import '../../css/b/b2d36xbqv.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 lis884bqb"/><circle class="clr-i-outline clr-i-outline-path-2 rqjikdywo"/><path class="b2d36xbqv clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tags-line",
	});
}

export default Component;
