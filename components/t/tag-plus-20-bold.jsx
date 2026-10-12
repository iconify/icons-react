import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-n28l9jj.css';
import '../../css/m/ml0uh1b4e.css';
import '../../css/x/xwdhawfba.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-n28l9jj"/><path class="ml0uh1b4e"/><path class="xwdhawfba"/><path class="hayl1lfmd"/>`,
		"fallback": "energy-icons:tag-plus-20-bold",
	});
}

export default Component;
