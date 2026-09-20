import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/g/gnjcyx.css';
import '../../css/o/oiu1id.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c gnjcyx"/><path class="a0m25c oiu1id"/>`,
		"fallback": "line-md:turn-slight-right",
	});
}

export default Component;
