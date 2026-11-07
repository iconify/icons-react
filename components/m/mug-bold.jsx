import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmcdlcbwt.css';
import '../../css/j/jyt8hmbvk.css';
import '../../css/g/g57wd6_qr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmcdlcbwt"/><path class="jyt8hmbvk"/><path class="g57wd6_qr"/>`,
		"fallback": "solar:mug-bold",
	});
}

export default Component;
