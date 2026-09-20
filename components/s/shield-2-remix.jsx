import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvrr6-blq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvrr6-blq"/>`,
		"fallback": "streamline:shield-2-remix",
	});
}

export default Component;
