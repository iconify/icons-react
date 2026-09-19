import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tae50hpaw.css';

const viewBox = {"width":280,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tae50hpaw"/>`,
		"fallback": "zmdi:local-parking",
	});
}

export default Component;
