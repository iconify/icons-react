import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pl6vmac3j.css';
import '../../css/h/hxqo68bhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pl6vmac3j"/><path class="hxqo68bhe"/></g>`,
		"fallback": "reicon:microscope",
	});
}

export default Component;
