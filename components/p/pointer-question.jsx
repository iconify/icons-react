import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiy3sgb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiy3sgb5z"/>`,
		"fallback": "tabler:pointer-question",
	});
}

export default Component;
