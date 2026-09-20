import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpe91rvch.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpe91rvch"/>`,
		"fallback": "streamline:travel-hotel-serving-dome-hand-porter-service-room-plate-hand-bellhop-platter-give-food",
	});
}

export default Component;
