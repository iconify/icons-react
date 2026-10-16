import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eflnjd84m.css';
import '../../css/v/vet0bubnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eflnjd84m"/><path class="vet0bubnp"/></g>`,
		"fallback": "andrsrxn:stock",
	});
}

export default Component;
