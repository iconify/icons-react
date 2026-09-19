import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh0q0mbuo.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh0q0mbuo"/>`,
		"fallback": "gis:screen-dub",
	});
}

export default Component;
