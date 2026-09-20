import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v331ncoop.css';
import '../../css/o/oe6jpabdk.css';
import '../../css/x/xy26lsb4d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v331ncoop"/><path class="oe6jpabdk"/><path class="xy26lsb4d"/>`,
		"fallback": "thesvg-color:perplexity-ai",
	});
}

export default Component;
