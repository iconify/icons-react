import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohag08f3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ohag08f3l"/>`,
		"fallback": "griddy-icons:settings-adjust-vertical",
	});
}

export default Component;
