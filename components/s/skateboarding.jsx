import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy-bghb3k.css';
import '../../css/v/v8a8hebya.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="sy-bghb3k"/><path class="v8a8hebya"/>`,
		"fallback": "map:skateboarding",
	});
}

export default Component;
