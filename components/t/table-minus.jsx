import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvs5w2btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvs5w2btz"/>`,
		"fallback": "meteor-icons:table-minus",
	});
}

export default Component;
