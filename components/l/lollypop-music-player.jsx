import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr08b61pk.css';
import '../../css/t/tjfi85b2h.css';
import '../../css/j/jyx3upbae.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hr08b61pk"/><path class="tjfi85b2h"/><path class="jyx3upbae"/>`,
		"fallback": "selfhst:lollypop-music-player",
	});
}

export default Component;
