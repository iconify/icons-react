import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xp1egv82h.css';
import '../../css/z/znhcwpb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xp1egv82h"/><path class="znhcwpb6i"/></g>`,
		"fallback": "streamline-sharp-color:phone-setting-flat",
	});
}

export default Component;
