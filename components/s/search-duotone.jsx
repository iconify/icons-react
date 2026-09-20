import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptpca_ffg.css';
import '../../css/m/m9ted4zaz.css';
import '../../css/w/wdkf5qwjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ptpca_ffg"/><path class="m9ted4zaz"/><circle class="wdkf5qwjj"/></g>`,
		"fallback": "lets-icons:search-duotone",
	});
}

export default Component;
