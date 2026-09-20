import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3twlpavd.css';
import '../../css/e/eztzo_ccz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3twlpavd"/><path class="eztzo_ccz"/>`,
		"fallback": "oui:push",
	});
}

export default Component;
