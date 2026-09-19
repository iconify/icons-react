import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3tgzacne.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3tgzacne"/>`,
		"fallback": "dinkie-icons:right-magnifying-glass-small",
	});
}

export default Component;
