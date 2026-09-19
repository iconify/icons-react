import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha1ngc8fk.css';
import '../../css/v/vrz9w3bax.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha1ngc8fk"/><path class="vrz9w3bax"/>`,
		"fallback": "gis:split",
	});
}

export default Component;
