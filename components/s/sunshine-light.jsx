import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igxg7ab5n.css';
import '../../css/n/ni2kd7y2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igxg7ab5n"/><path class="ni2kd7y2o"/>`,
		"fallback": "selfhst:sunshine-light",
	});
}

export default Component;
