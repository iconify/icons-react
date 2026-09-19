import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijg53gbgw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijg53gbgw"/>`,
		"fallback": "fluent-mdl2:p-o-i",
	});
}

export default Component;
