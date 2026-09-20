import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3re52bcw.css';
import '../../css/x/xl643povl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3re52bcw"/><path class="xl643povl"/>`,
		"fallback": "selfhst:mend-container",
	});
}

export default Component;
