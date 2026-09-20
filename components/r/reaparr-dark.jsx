import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlnugch9s.css';
import '../../css/j/j8a3wlolo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlnugch9s"/><path class="j8a3wlolo"/>`,
		"fallback": "selfhst:reaparr-dark",
	});
}

export default Component;
