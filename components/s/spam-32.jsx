import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sib2qlbqm.css';
import '../../css/o/o2vbwlbha.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sib2qlbqm"/><path clip-rule="evenodd" class="o2vbwlbha"/>`,
		"fallback": "qlementine-icons:spam-32",
	});
}

export default Component;
