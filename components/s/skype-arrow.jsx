import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbn2c2bwu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbn2c2bwu"/>`,
		"fallback": "fluent-mdl2:skype-arrow",
	});
}

export default Component;
