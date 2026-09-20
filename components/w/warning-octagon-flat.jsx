import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mv_1xcbbn.css';
import '../../css/g/gvuj_db7z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mv_1xcbbn"/><path class="gvuj_db7z"/></g>`,
		"fallback": "streamline-color:warning-octagon-flat",
	});
}

export default Component;
