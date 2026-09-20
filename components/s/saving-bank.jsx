import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/owfbcdrve.css';
import '../../css/x/xacu93d6a.css';
import '../../css/k/kg1skkbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="owfbcdrve"/><path class="xacu93d6a"/><path class="kg1skkbwt"/></g>`,
		"fallback": "streamline-freehand-color:saving-bank",
	});
}

export default Component;
