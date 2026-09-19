import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/r/rfu4tssqt.css';
import '../../css/d/drwui-btv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="rfu4tssqt"/><path class="drwui-btv"/>`,
		"fallback": "ant-design:interation-twotone",
	});
}

export default Component;
