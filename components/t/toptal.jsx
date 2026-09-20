import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi_f7v6xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi_f7v6xe"/>`,
		"fallback": "simple-icons:toptal",
	});
}

export default Component;
