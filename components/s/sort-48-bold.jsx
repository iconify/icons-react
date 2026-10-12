import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oljuiobcr.css';
import '../../css/e/eecmlgb_s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oljuiobcr"/><path class="eecmlgb_s"/>`,
		"fallback": "energy-icons:sort-48-bold",
	});
}

export default Component;
