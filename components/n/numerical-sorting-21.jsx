import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egp4naccw.css';
import '../../css/x/xisz-8bbz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egp4naccw"/><path class="xisz-8bbz"/>`,
		"fallback": "flat-color-icons:numerical-sorting-21",
	});
}

export default Component;
