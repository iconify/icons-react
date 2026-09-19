import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/q/qumfsab4v.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/diyxjxq2t.css';
import '../../css/r/rb52_7vlf.css';
import '../../css/s/s_ypkmx-c.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGJl4X0cJB" class="n1mjunbsu"><path clip-rule="evenodd" class="qumfsab4v"/></mask><g class="ft5dv1b6b"><path clip-rule="evenodd" class="diyxjxq2t"/><path mask="url(#SVGJl4X0cJB)" class="rb52_7vlf"/><path clip-rule="evenodd" class="s_ypkmx-c"/></g>`,
		"fallback": "flagpack:mt",
	});
}

export default Component;
