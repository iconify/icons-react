import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8-frc3ae.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8-frc3ae"/>`,
		"fallback": "uiw:swap-left",
	});
}

export default Component;
