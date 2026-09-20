import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkil4xoxe.css';
import '../../css/k/kao9e10zu.css';
import '../../css/v/v_u95_e3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkil4xoxe"/><path class="kao9e10zu"/><path class="v_u95_e3w"/>`,
		"fallback": "stash:wallet-duotone",
	});
}

export default Component;
