import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbewg56ko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbewg56ko"/>`,
		"fallback": "mdi:locker-multiple",
	});
}

export default Component;
