import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hop9bdcex.css';
import '../../css/a/a2p488k4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hop9bdcex"/><path class="a2p488k4k"/></g>`,
		"fallback": "hugeicons:lasso-tool-02",
	});
}

export default Component;
