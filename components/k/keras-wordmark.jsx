import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_flxzbbv.css';
import '../../css/c/c4k71-bhq.css';
import '../../css/i/iovi16bio.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_flxzbbv"/><path class="c4k71-bhq"/><path class="iovi16bio"/>`,
		"fallback": "devicon:keras-wordmark",
	});
}

export default Component;
