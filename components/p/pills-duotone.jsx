import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i18ffpbgu.css';
import '../../css/s/s2cfy4b5f.css';
import '../../css/b/bshhd7gtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i18ffpbgu"/><path class="s2cfy4b5f"/><path class="bshhd7gtm"/></g>`,
		"fallback": "reicon:pills-duotone",
	});
}

export default Component;
