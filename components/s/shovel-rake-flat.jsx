import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r1b-rpbea.css';
import '../../css/w/w-_4s-3yn.css';
import '../../css/z/zesthlbac.css';
import '../../css/g/gn92_5b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r1b-rpbea"/><path class="w-_4s-3yn"/><path class="zesthlbac"/><path class="gn92_5b-x"/></g>`,
		"fallback": "streamline-sharp-color:shovel-rake-flat",
	});
}

export default Component;
