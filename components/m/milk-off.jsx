import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vi1wsrbpa.css';
import '../../css/x/xt5lvx62w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vi1wsrbpa"/><path class="xt5lvx62w"/></g>`,
		"fallback": "vadivam:milk-off",
	});
}

export default Component;
