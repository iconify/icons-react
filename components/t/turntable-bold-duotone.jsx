import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxz8lnubg.css';
import '../../css/e/eo0cog95z.css';
import '../../css/w/w8t6fkc8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxz8lnubg"/><path clip-rule="evenodd" class="eo0cog95z"/><path clip-rule="evenodd" class="w8t6fkc8x"/>`,
		"fallback": "solar:turntable-bold-duotone",
	});
}

export default Component;
