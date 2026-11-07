import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtmuzrg2o.css';
import '../../css/t/t9ntucclw.css';
import '../../css/v/v81dzmbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtmuzrg2o"/><path clip-rule="evenodd" class="t9ntucclw"/><path class="v81dzmbmg"/>`,
		"fallback": "solar:safe-circle-bold-duotone",
	});
}

export default Component;
