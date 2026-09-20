import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5el33zrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5el33zrv"/>`,
		"fallback": "lucide-lab:iron-off",
	});
}

export default Component;
