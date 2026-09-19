import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh1uod04j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh1uod04j"/>`,
		"fallback": "glyphs:j-duo",
	});
}

export default Component;
