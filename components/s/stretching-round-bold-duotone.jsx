import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay5dbdcag.css';
import '../../css/e/emvqbbbmt.css';
import '../../css/k/kg0jzztbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay5dbdcag"/><path clip-rule="evenodd" class="emvqbbbmt"/><path class="kg0jzztbu"/>`,
		"fallback": "solar:stretching-round-bold-duotone",
	});
}

export default Component;
