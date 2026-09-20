import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk8un56ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fk8un56ea"/>`,
		"fallback": "streamline-sharp:target-3-remix",
	});
}

export default Component;
