import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apk1qtb9j.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apk1qtb9j"/>`,
		"fallback": "gis:layer-rm",
	});
}

export default Component;
