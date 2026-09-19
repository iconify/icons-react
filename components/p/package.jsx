import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sujvg4r4g.css';
import '../../css/x/xijg6zb7n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sujvg4r4g"/><path class="xijg6zb7n"/>`,
		"fallback": "flat-color-icons:package",
	});
}

export default Component;
