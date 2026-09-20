import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb7672bzg.css';
import '../../css/e/eyk4iwcnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb7672bzg"/><path class="eyk4iwcnj"/>`,
		"fallback": "token:vee",
	});
}

export default Component;
