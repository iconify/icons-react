import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/o/ovnacibyj.css';
import '../../css/h/h4_-fn3-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="ovnacibyj"/><path class="h4_-fn3-j"/>`,
		"fallback": "solar:link-square-bold-duotone",
	});
}

export default Component;
