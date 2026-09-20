import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpwyf7bxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rpwyf7bxa"/>`,
		"fallback": "streamline-plump:stool-solid",
	});
}

export default Component;
