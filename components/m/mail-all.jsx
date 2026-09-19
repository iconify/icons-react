import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzw5cbb6b.css';
import '../../css/o/o90l0ebko.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzw5cbb6b"/><path class="o90l0ebko"/>`,
		"fallback": "carbon:mail-all",
	});
}

export default Component;
