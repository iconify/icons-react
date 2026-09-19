import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlevxub6f.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlevxub6f"/>`,
		"fallback": "fluent-mdl2:map-pin",
	});
}

export default Component;
