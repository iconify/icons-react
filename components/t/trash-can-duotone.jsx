import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkr1zibwd.css';
import '../../css/p/pincndczi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkr1zibwd"/><path class="pincndczi"/>`,
		"fallback": "stash:trash-can-duotone",
	});
}

export default Component;
