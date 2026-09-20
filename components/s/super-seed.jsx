import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssdxi2bok.css';
import '../../css/b/b2qgwseyp.css';
import '../../css/l/lqp4slntg.css';
import '../../css/a/a9osemp6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssdxi2bok"/><path class="b2qgwseyp"/><path class="lqp4slntg"/><path clip-rule="evenodd" class="a9osemp6h"/>`,
		"fallback": "token:super-seed",
	});
}

export default Component;
