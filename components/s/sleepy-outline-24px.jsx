import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l132zcc0f.css';
import '../../css/b/bduw573rj.css';
import '../../css/g/gnezv3kba.css';
import '../../css/d/dsfjv5buk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l132zcc0f"/><path class="bduw573rj"/><path clip-rule="evenodd" class="gnezv3kba"/><path class="dsfjv5buk"/></g>`,
		"fallback": "healthicons:sleepy-outline-24px",
	});
}

export default Component;
