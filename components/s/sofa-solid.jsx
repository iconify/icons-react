import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f33b351rw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f33b351rw"/>`,
		"fallback": "streamline-plump:sofa-solid",
	});
}

export default Component;
