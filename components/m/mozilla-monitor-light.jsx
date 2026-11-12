import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi7f4wb8o.css';
import '../../css/g/gbm6d6bzt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi7f4wb8o"/><path class="gbm6d6bzt"/>`,
		"fallback": "selfhst:mozilla-monitor-light",
	});
}

export default Component;
