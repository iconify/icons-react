import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ludud6bix.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/b/b508hdoqi.css';
import '../../css/s/ss7zqegju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ludud6bix"/><g class="xtpeb-edw"><path class="b508hdoqi"/><path class="ss7zqegju"/></g>`,
		"fallback": "solar:reply-bold-duotone",
	});
}

export default Component;
