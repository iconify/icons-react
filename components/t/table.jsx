import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb0k1pbfx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb0k1pbfx"/>`,
		"fallback": "carbon:table",
	});
}

export default Component;
