import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih-vw5bhq.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih-vw5bhq"/>`,
		"fallback": "si-glyph:mushrooms",
	});
}

export default Component;
