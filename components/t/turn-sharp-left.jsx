import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/c/ct9-oq.css';
import '../../css/j/jzrh9t.css';
import '../../css/s/so-from-28.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ct9-oq"/><path class="a0m25c jzrh9t"/>`,
		"fallback": "line-md:turn-sharp-left",
	});
}

export default Component;
