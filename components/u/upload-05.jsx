import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pfczw04wz.css';
import '../../css/c/cf56gjb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pfczw04wz"/><path class="cf56gjb1f"/></g>`,
		"fallback": "hugeicons:upload-05",
	});
}

export default Component;
