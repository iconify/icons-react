import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c65-ehvfy.css';
import '../../css/d/d7tt0bbas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c65-ehvfy"/><path class="d7tt0bbas"/>`,
		"fallback": "energy-icons:ruins-48",
	});
}

export default Component;
