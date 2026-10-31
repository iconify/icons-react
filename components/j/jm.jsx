import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzlf75b0h.css';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ucmc02bvs.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/q/qsgkoub8r.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGJRuOvcot" class="hzlf75b0h"/></defs><g class="bi12bsetm"><path class="ucmc02bvs"/><mask id="SVGMVPpHcRl" class="n1mjunbsu"><use href="#SVGJRuOvcot"/></mask><path mask="url(#SVGMVPpHcRl)" class="qsgkoub8r"/></g>`,
		"fallback": "cif:jm",
	});
}

export default Component;
