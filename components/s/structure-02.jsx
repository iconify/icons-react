import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jsk1cskcf.css';
import '../../css/s/spnb3cbwy.css';
import '../../css/k/kpvc2fb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jsk1cskcf"/><path class="spnb3cbwy"/><path class="kpvc2fb7j"/></g>`,
		"fallback": "hugeicons:structure-02",
	});
}

export default Component;
