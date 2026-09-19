import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egp4naccw.css';
import '../../css/j/jexl-dbou.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egp4naccw"/><path class="jexl-dbou"/>`,
		"fallback": "flat-color-icons:numerical-sorting-12",
	});
}

export default Component;
