import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx20rqbza.css';
import '../../css/m/m94p08b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx20rqbza"/><path clip-rule="evenodd" class="m94p08b9v"/>`,
		"fallback": "basil:user-clock-solid",
	});
}

export default Component;
