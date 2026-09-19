import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7b52bcxl.css';
import '../../css/z/zvlz7ab9o.css';
import '../../css/r/roko4zy8i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7b52bcxl"/><path class="zvlz7ab9o"/><path class="roko4zy8i"/>`,
		"fallback": "famicons:server-sharp",
	});
}

export default Component;
