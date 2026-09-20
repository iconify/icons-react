import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7fm4ccbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7fm4ccbv"/>`,
		"fallback": "keyline-icons:swiss-franc-two-tone",
	});
}

export default Component;
