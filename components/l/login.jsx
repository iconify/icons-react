import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/k/khtx_s.css';
import '../../css/o/o6huwm.css';
import '../../css/v/v0wswn.css';
import '../../css/s/so-from-34.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c khtx_s"/><path class="a0m25c o6huwm"/><path class="a0m25c v0wswn"/>`,
		"fallback": "line-md:login",
	});
}

export default Component;
