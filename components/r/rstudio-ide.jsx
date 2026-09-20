import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwoukbc5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwoukbc5m"/>`,
		"fallback": "thesvg-color:rstudio-ide",
	});
}

export default Component;
