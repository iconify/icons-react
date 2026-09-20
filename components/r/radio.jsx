import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amnh1hbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amnh1hbco"/>`,
		"fallback": "tabler:radio",
	});
}

export default Component;
