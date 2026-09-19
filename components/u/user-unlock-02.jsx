import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bumj59npk.css';
import '../../css/x/xocox8yzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="bumj59npk"/><path class="xocox8yzo"/></g>`,
		"fallback": "hugeicons:user-unlock-02",
	});
}

export default Component;
