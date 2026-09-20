import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/d8m79rbjp.css';
import '../../css/w/wz3f1kb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="d8m79rbjp"/><path class="wz3f1kb2v"/></g>`,
		"fallback": "streamline-cyber:mobile-phone-text",
	});
}

export default Component;
