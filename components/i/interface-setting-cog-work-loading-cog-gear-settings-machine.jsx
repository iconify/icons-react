import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0ymkm4ol.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0ymkm4ol"/>`,
		"fallback": "streamline:interface-setting-cog-work-loading-cog-gear-settings-machine",
	});
}

export default Component;
