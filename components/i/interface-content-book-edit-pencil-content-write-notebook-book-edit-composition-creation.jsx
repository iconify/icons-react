import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br1dpobfj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br1dpobfj"/>`,
		"fallback": "streamline:interface-content-book-edit-pencil-content-write-notebook-book-edit-composition-creation",
	});
}

export default Component;
