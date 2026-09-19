import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/coj8hiieh.css';
import '../../css/p/p_klmybkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="coj8hiieh"/><path class="p_klmybkg"/></g>`,
		"fallback": "hugeicons:refresh-03",
	});
}

export default Component;
