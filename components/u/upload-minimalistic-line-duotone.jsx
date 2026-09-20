import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x8f9lbbka.css';
import '../../css/a/ac19bow3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x8f9lbbka"/><path class="ac19bow3y"/></g>`,
		"fallback": "solar:upload-minimalistic-line-duotone",
	});
}

export default Component;
