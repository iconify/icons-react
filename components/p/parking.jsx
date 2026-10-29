import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqq7tyroa.css';
import '../../css/z/zqrqgwbql.css';
import '../../css/y/yfn318ixr.css';
import '../../css/d/daiy-wttc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqq7tyroa wm-k"/><path class="wm-k zqrqgwbql"/><path class="wm-a yfn318ixr"/><path class="daiy-wttc wm-a"/>`,
		"fallback": "withicons-bauhaus:parking",
	});
}

export default Component;
