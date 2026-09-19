import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt9xz1bki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt9xz1bki"/>`,
		"fallback": "healthicons:social-distancing",
	});
}

export default Component;
