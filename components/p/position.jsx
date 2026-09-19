import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stgrhqeqj.css';
import '../../css/r/rb02adbwv.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stgrhqeqj"/><path class="rb02adbwv"/>`,
		"fallback": "gis:position",
	});
}

export default Component;
