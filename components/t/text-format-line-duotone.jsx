import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gwg-y3bus.css';
import '../../css/t/t22me5f7h.css';
import '../../css/o/ost3o95wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gwg-y3bus"/><path class="t22me5f7h"/><path class="ost3o95wd"/></g>`,
		"fallback": "solar:text-format-line-duotone",
	});
}

export default Component;
