import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p77rup82s.css';
import '../../css/j/jtqwqxf9f.css';
import '../../css/e/eoy15ydtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="p77rup82s"/><path class="jtqwqxf9f"/><path class="eoy15ydtt"/></g>`,
		"fallback": "iconamoon:upside-down-face-bold",
	});
}

export default Component;
