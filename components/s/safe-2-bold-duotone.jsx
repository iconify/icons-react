import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgz3smvwr.css';
import '../../css/t/te-137bem.css';
import '../../css/s/ss1975b1y.css';
import '../../css/u/uqpbchbyc.css';
import '../../css/b/b3wp9p47e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgz3smvwr"/><path class="te-137bem"/><path class="ss1975b1y"/><path clip-rule="evenodd" class="uqpbchbyc"/><path clip-rule="evenodd" class="b3wp9p47e"/>`,
		"fallback": "solar:safe-2-bold-duotone",
	});
}

export default Component;
