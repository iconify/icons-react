import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xskf5vaoq.css';
import '../../css/r/rtw5fkfor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xskf5vaoq"/><path class="rtw5fkfor"/></g>`,
		"fallback": "keyline-icons:upload-sharp-duotone",
	});
}

export default Component;
