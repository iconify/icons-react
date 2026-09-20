import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy3n31i7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cy3n31i7f"/>`,
		"fallback": "streamline-plump:safari-solid",
	});
}

export default Component;
