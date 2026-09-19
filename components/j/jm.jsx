import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzlf75b0h.css';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fdnotg1-m.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/y/yzq7vbe9n.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGiGuCgekV" class="hzlf75b0h"/></defs><g class="bi12bsetm"><path class="fdnotg1-m"/><mask id="SVGpHTGXc0w" class="n1mjunbsu"><use href="#SVGiGuCgekV"/></mask><path mask="url(#SVGpHTGXc0w)" class="yzq7vbe9n"/></g>`,
		"fallback": "cif:jm",
	});
}

export default Component;
