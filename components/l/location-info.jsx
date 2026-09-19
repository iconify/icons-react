import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld2931_iv.css';
import '../../css/s/s9ab3vb3q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld2931_iv"/><path class="s9ab3vb3q"/>`,
		"fallback": "carbon:location-info",
	});
}

export default Component;
