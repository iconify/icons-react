import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkan5c65j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkan5c65j"/>`,
		"fallback": "glyphs:tablet",
	});
}

export default Component;
