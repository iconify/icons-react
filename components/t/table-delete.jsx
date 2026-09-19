import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i38todi1o.css';
import '../../css/x/xv802vxka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i38todi1o"/><path class="xv802vxka"/>`,
		"fallback": "ci:table-delete",
	});
}

export default Component;
