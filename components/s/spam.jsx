import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-my4c6jq.css';
import '../../css/o/o7fygmbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o-my4c6jq"/><path class="o7fygmbeh"/></g>`,
		"fallback": "hugeicons:spam",
	});
}

export default Component;
