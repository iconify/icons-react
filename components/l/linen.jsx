import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r800l5baz.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r800l5baz"/>`,
		"fallback": "memory:linen",
	});
}

export default Component;
