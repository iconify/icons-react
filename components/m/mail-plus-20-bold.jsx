import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z49l83-sf.css';
import '../../css/o/o9np2sbrl.css';
import '../../css/h/h5hj_ccot.css';
import '../../css/l/lfaj1l5um.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z49l83-sf"/><path class="o9np2sbrl"/><path class="h5hj_ccot"/><path class="lfaj1l5um"/>`,
		"fallback": "energy-icons:mail-plus-20-bold",
	});
}

export default Component;
