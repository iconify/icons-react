import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n1c5y3bdo.css';
import '../../css/a/avue01box.css';
import '../../css/e/empys87bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n1c5y3bdo"/><path class="avue01box"/><path class="empys87bl"/></g>`,
		"fallback": "hugeicons:recovery-mail",
	});
}

export default Component;
