import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf35kd9hh.css';
import '../../css/u/ui2c-mkkt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rf35kd9hh"/><path class="ui2c-mkkt"/>`,
		"fallback": "ix:shopping-cart",
	});
}

export default Component;
