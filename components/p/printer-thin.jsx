import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/q1oo2lbjw.css';
import '../../css/h/hi30kmb4w.css';
import '../../css/r/r67uvtzmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="q1oo2lbjw"/><path class="hi30kmb4w"/><path class="r67uvtzmv"/></g>`,
		"fallback": "iconamoon:printer-thin",
	});
}

export default Component;
