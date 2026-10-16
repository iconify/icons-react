import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjpjj7bux.css';
import '../../css/f/fa8ycbb8q.css';
import '../../css/e/epesvsbmv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjpjj7bux"/><path class="fa8ycbb8q"/><path class="epesvsbmv"/>`,
		"fallback": "energy-icons:post-office-48-bold",
	});
}

export default Component;
