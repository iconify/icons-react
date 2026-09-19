import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uoqau0b3r.css';
import '../../css/z/zrjmoujkm.css';
import '../../css/p/pmz80t_au.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uoqau0b3r"/><path class="zrjmoujkm"/><path class="pmz80t_au"/></g>`,
		"fallback": "flagpack:re",
	});
}

export default Component;
