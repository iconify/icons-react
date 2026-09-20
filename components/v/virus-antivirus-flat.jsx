import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/temgbpvij.css';
import '../../css/t/to8m9vb5r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="temgbpvij"/><path class="to8m9vb5r"/></g>`,
		"fallback": "streamline-color:virus-antivirus-flat",
	});
}

export default Component;
