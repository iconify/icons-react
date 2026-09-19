import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dgeqk47rg.css';
import '../../css/i/iyn9fmbzw.css';
import '../../css/x/xkg6e8cwd.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dgeqk47rg"/><path class="iyn9fmbzw"/><path class="xkg6e8cwd"/></g>`,
		"fallback": "flagpack:lv",
	});
}

export default Component;
