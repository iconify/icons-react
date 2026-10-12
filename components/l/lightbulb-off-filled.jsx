import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulblegbmg.css';
import '../../css/f/fszydxb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulblegbmg"/><path class="fszydxb0y"/>`,
		"fallback": "lucide-extended:lightbulb-off-filled",
	});
}

export default Component;
