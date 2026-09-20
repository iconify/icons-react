import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edf_ykbzy.css';
import '../../css/e/eiod7z1da.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="edf_ykbzy"/><path class="eiod7z1da"/></g>`,
		"fallback": "streamline-color:phone-ringing-1",
	});
}

export default Component;
