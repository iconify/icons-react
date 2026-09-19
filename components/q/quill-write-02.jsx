import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fgf3lmnhv.css';
import '../../css/s/se9gb8bkp.css';
import '../../css/z/zagwpqb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fgf3lmnhv"/><path class="se9gb8bkp"/><path class="zagwpqb9a"/></g>`,
		"fallback": "hugeicons:quill-write-02",
	});
}

export default Component;
