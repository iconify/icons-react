import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1bfxqbht.css';
import '../../css/y/yk7g-9jxe.css';
import '../../css/p/pr-s_8yyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1bfxqbht"/><path class="yk7g-9jxe"/><path class="pr-s_8yyc"/>`,
		"fallback": "solar:square-double-alt-arrow-down-bold-duotone",
	});
}

export default Component;
