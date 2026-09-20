import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8yeuabmx.css';
import '../../css/o/olvwwtpsp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u8yeuabmx"/><path class="olvwwtpsp"/>`,
		"fallback": "qlementine-icons:share-external-16",
	});
}

export default Component;
