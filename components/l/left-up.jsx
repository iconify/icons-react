import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyqta459c.css';
import '../../css/i/i1nvd4bat.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyqta459c"/><path class="i1nvd4bat"/>`,
		"fallback": "flat-color-icons:left-up",
	});
}

export default Component;
