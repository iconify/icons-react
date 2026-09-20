import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-wkamaxf.css';
import '../../css/s/s6yebsb7h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-wkamaxf"/><path class="s6yebsb7h"/>`,
		"fallback": "selfhst:lidarr-radarr",
	});
}

export default Component;
