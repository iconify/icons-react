import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0op70bmw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0op70bmw"/>`,
		"fallback": "glyphs:location-arrow-duo",
	});
}

export default Component;
