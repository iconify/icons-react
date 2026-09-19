import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul4ei0bva.css';
import '../../css/z/zqbyl-b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul4ei0bva"/><path class="zqbyl-b3x"/>`,
		"fallback": "boxicons:mobile",
	});
}

export default Component;
