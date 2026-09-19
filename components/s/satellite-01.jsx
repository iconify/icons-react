import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q-s1q-6-f.css';
import '../../css/t/t-nqbebwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q-s1q-6-f"/><path class="t-nqbebwj"/></g>`,
		"fallback": "hugeicons:satellite-01",
	});
}

export default Component;
