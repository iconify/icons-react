import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cib2qw9rg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cib2qw9rg"/>`,
		"fallback": "icon-park:point",
	});
}

export default Component;
