import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bytiv6vnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bytiv6vnl"/>`,
		"fallback": "cbi:panel-glass-door-locked",
	});
}

export default Component;
