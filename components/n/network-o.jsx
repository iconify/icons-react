import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcexz4vvq.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcexz4vvq"/>`,
		"fallback": "gis:network-o",
	});
}

export default Component;
