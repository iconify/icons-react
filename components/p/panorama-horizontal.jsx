import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4aeltbpw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4aeltbpw"/>`,
		"fallback": "icon-park:panorama-horizontal",
	});
}

export default Component;
