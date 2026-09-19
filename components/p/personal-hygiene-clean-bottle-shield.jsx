import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/utta4pe_h.css';
import '../../css/b/binpxj9wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="utta4pe_h"/><path class="binpxj9wb"/></g>`,
		"fallback": "covid:personal-hygiene-clean-bottle-shield",
	});
}

export default Component;
