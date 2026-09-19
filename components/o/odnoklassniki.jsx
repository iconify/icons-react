import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b48oo7bzk.css';

const viewBox = {"width":14,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b48oo7bzk"/>`,
		"fallback": "fontisto:odnoklassniki",
	});
}

export default Component;
