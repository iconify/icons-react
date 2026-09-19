import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r35rppbpm.css';
import '../../css/y/yjyw_obwv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r35rppbpm"/><path class="yjyw_obwv"/>`,
		"fallback": "fxemoji:lowerleftfountainpen",
	});
}

export default Component;
