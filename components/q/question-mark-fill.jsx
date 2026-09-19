import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6y_ocbap.css';
import '../../css/d/duuf9m24f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6y_ocbap"/><circle class="duuf9m24f"/>`,
		"fallback": "eva:question-mark-fill",
	});
}

export default Component;
