import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/ztr1hloqh.css';
import '../../css/z/zz6iqrbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ztr1hloqh"/><path class="zz6iqrbuv"/></g>`,
		"fallback": "hugeicons:wallet-remove-02",
	});
}

export default Component;
