import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4ryjv78a.css';
import '../../css/t/txzd8jtfb.css';
import '../../css/r/r7a_xi8an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4ryjv78a"/><path class="txzd8jtfb"/><path class="r7a_xi8an"/>`,
		"fallback": "token:lbt",
	});
}

export default Component;
