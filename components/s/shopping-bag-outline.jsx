import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_9m_3b3d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_9m_3b3d"/>`,
		"fallback": "glyphs:shopping-bag-outline",
	});
}

export default Component;
