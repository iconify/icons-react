import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grzo6xb2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="grzo6xb2f"/>`,
		"fallback": "streamline-plump:laptop-solid",
	});
}

export default Component;
