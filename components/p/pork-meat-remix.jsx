import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvqjn6b5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tvqjn6b5p"/>`,
		"fallback": "streamline-plump:pork-meat-remix",
	});
}

export default Component;
