import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/x/x6dwuo.css';
import '../../css/a/ahcaho.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-50.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew x6dwuo"/><path class="ahcaho iw1iew"/>`,
		"fallback": "line-md:laptop-twotone",
	});
}

export default Component;
