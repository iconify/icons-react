import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3ok68b9w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3ok68b9w"/>`,
		"fallback": "icon-park:sorcerer-hat",
	});
}

export default Component;
