import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iufm3lbgw.css';
import '../../css/i/i8odlzb7a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iufm3lbgw"/><path class="i8odlzb7a"/>`,
		"fallback": "selfhst:raygun-monitoring-dark",
	});
}

export default Component;
