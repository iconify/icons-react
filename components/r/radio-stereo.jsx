import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/txevfybmf.css';
import '../../css/j/jvmzb_a3a.css';
import '../../css/g/gu7z32rfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="txevfybmf"/><path class="jvmzb_a3a"/><path class="gu7z32rfw"/></g>`,
		"fallback": "streamline-freehand-color:radio-stereo",
	});
}

export default Component;
