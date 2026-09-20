import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmhl6tbhb.css';
import '../../css/r/rjpl5yb_a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmhl6tbhb"/><path class="rjpl5yb_a"/>`,
		"fallback": "nimbus:stats",
	});
}

export default Component;
