import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqhhwqbog.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqhhwqbog"/>`,
		"fallback": "fluent-mdl2:mail-repeat",
	});
}

export default Component;
