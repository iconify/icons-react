import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9lz_tuxt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9lz_tuxt"/>`,
		"fallback": "fluent-mdl2:qand-a-mirror",
	});
}

export default Component;
