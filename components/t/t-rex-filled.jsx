import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apnd5pbku.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apnd5pbku"/>`,
		"fallback": "dinkie-icons:t-rex-filled",
	});
}

export default Component;
