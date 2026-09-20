import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gvgd1nkyi.css';
import '../../css/r/rukhn3j8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gvgd1nkyi"/><path class="rukhn3j8j"/></g>`,
		"fallback": "streamline-ultimate:origin-logo",
	});
}

export default Component;
