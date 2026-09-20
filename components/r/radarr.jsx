import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-wkamaxf.css';
import '../../css/f/f24w92bpp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-wkamaxf"/><path class="f24w92bpp"/>`,
		"fallback": "selfhst:radarr",
	});
}

export default Component;
