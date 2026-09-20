import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy6o-6bwq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy6o-6bwq"/>`,
		"fallback": "selfhst:uptimekit-dark",
	});
}

export default Component;
