import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pip8p3bjk.css';

const viewBox = {"width":384,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pip8p3bjk"/>`,
		"fallback": "zmdi:local-car-wash",
	});
}

export default Component;
