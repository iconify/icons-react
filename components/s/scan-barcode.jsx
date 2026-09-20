import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hdbg80b4p.css';
import '../../css/x/xuu_4_bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hdbg80b4p"/><path class="xuu_4_bic"/></g>`,
		"fallback": "reicon:scan-barcode",
	});
}

export default Component;
