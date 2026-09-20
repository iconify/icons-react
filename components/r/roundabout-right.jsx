import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/m/m5-j3h.css';
import '../../css/b/btpiks.css';
import '../../css/s/so-from-40.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c m5-j3h"/><path class="a0m25c btpiks"/>`,
		"fallback": "line-md:roundabout-right",
	});
}

export default Component;
