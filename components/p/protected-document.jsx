import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku-7y90xa.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku-7y90xa"/>`,
		"fallback": "fluent-mdl2:protected-document",
	});
}

export default Component;
