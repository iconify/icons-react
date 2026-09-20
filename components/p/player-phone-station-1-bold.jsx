import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjdstubtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjdstubtq"/>`,
		"fallback": "streamline-ultimate:player-phone-station-1-bold",
	});
}

export default Component;
