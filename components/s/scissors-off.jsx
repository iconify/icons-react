import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kmkz1tiit.css';
import '../../css/g/goqz8tb3v.css';
import '../../css/j/jvg3zkbua.css';
import '../../css/q/qncjnqb9b.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kmkz1tiit"/><path clip-rule="evenodd" class="goqz8tb3v"/><path class="jvg3zkbua"/><path class="qncjnqb9b"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:scissors-off",
	});
}

export default Component;
