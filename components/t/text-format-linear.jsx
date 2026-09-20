import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/majmwhrqy.css';
import '../../css/o/ost3o95wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="majmwhrqy"/><path class="ost3o95wd"/></g>`,
		"fallback": "solar:text-format-linear",
	});
}

export default Component;
