import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsvy08b5f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsvy08b5f"/>`,
		"fallback": "glyphs:sparkle-duo",
	});
}

export default Component;
