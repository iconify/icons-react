import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3g14o-3g.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3g14o-3g"/>`,
		"fallback": "fluent-mdl2:live-site",
	});
}

export default Component;
