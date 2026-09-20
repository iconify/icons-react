import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ncvez9blc.css';
import '../../css/f/fkgkxrbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ncvez9blc"/><path class="fkgkxrbjx"/></g>`,
		"fallback": "tabler:progress-down",
	});
}

export default Component;
