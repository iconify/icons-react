import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7zvznbqs.css';
import '../../css/y/yj75rjwzt.css';
import '../../css/e/ec3kxyyka.css';
import '../../css/v/vt56ykbqn.css';
import '../../css/g/gfiw8tbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o7zvznbqs"/><path class="yj75rjwzt"/><path class="ec3kxyyka"/><path class="vt56ykbqn"/><path class="gfiw8tbys"/></g>`,
		"fallback": "streamline-cyber-color:shopping-product",
	});
}

export default Component;
