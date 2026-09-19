import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jlg_psa6a.css';
import '../../css/q/q64t3f4kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jlg_psa6a"/><path class="q64t3f4kb"/></g>`,
		"fallback": "hugeicons:shopping-basket-done-01",
	});
}

export default Component;
