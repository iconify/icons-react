import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb-qfqbra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb-qfqbra"/>`,
		"fallback": "icon-park-outline:thunderbolt",
	});
}

export default Component;
