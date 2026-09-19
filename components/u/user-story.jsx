import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gacv9ebgf.css';
import '../../css/o/o9_d-n63m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gacv9ebgf"/><path class="o9_d-n63m"/></g>`,
		"fallback": "hugeicons:user-story",
	});
}

export default Component;
