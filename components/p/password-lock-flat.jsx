import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zbqsdtbha.css';
import '../../css/e/efzf-24zr.css';
import '../../css/o/o43u-8z7a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zbqsdtbha"/><path class="efzf-24zr"/><path class="o43u-8z7a"/></g>`,
		"fallback": "streamline-plump-color:password-lock-flat",
	});
}

export default Component;
