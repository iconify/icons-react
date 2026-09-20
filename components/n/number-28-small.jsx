import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtdoon55r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtdoon55r"/>`,
		"fallback": "tabler:number-28-small",
	});
}

export default Component;
