import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8rru2b7i.css';
import '../../css/d/dwn288bus.css';
import '../../css/g/gddrajlcm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8rru2b7i"/><path class="dwn288bus"/><path class="gddrajlcm"/>`,
		"fallback": "streamline-pixel:logo-twitch-2",
	});
}

export default Component;
