import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pufzmmx5m.css';
import '../../css/n/ngmlb0b9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pufzmmx5m"/><path class="ngmlb0b9f"/>`,
		"fallback": "selfhst:toparr-dark",
	});
}

export default Component;
