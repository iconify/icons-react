import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywm0dabpy.css';
import '../../css/z/z5s452b-k.css';
import '../../css/b/bv5q348rl.css';
import '../../css/h/h4b91qjsh.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywm0dabpy"/><path class="z5s452b-k"/><path class="bv5q348rl"/><path class="h4b91qjsh"/>`,
		"fallback": "fontisto:react",
	});
}

export default Component;
