import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iajba_bmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iajba_bmv"/>`,
		"fallback": "mdi:standard-definition",
	});
}

export default Component;
