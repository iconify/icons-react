import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guoec1bud.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guoec1bud"/>`,
		"fallback": "fluent-mdl2:parking-mirrored-solid",
	});
}

export default Component;
