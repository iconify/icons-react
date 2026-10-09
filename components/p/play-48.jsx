import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgeo2czcv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgeo2czcv"/>`,
		"fallback": "energy-icons:play-48",
	});
}

export default Component;
