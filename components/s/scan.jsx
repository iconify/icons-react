import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcw_0vb3n.css';
import '../../css/r/ro-apk0gw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcw_0vb3n"/><path class="ro-apk0gw"/>`,
		"fallback": "carbon:scan",
	});
}

export default Component;
