import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhxi0-bnb.css';
import '../../css/u/u3fkkvb-o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhxi0-bnb"/><path class="u3fkkvb-o"/>`,
		"fallback": "flat-color-icons:todo-list",
	});
}

export default Component;
