import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byzn4abda.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byzn4abda"/>`,
		"fallback": "glyphs:shield-2",
	});
}

export default Component;
