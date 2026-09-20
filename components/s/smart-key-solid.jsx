import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pm1ykbyfk.css';
import '../../css/p/ppgy83b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pm1ykbyfk"/><path class="ppgy83b4w"/></g>`,
		"fallback": "streamline-sharp:smart-key-solid",
	});
}

export default Component;
