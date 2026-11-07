import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/ktnoc0bvp.css';
import '../../css/g/gtm8fkbhm.css';
import '../../css/n/noixcxd5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path clip-rule="evenodd" class="ktnoc0bvp"/><path class="gtm8fkbhm"/></g><path class="noixcxd5z"/>`,
		"fallback": "solar:plug-circle-bold-duotone",
	});
}

export default Component;
