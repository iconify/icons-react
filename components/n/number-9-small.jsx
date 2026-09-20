import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfj4sf55g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfj4sf55g"/>`,
		"fallback": "tabler:number-9-small",
	});
}

export default Component;
