import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qllraju_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qllraju_a"/>`,
		"fallback": "streamline-sharp:slide-show-play-remix",
	});
}

export default Component;
