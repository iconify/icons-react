import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ry8yys6dd.css';
import '../../css/n/n35mfrb1w.css';
import '../../css/l/lvh4ow66b.css';
import '../../css/v/vyj801g4d.css';
import '../../css/b/biqohvbnp.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="ry8yys6dd"><path class="n35mfrb1w"/><path class="lvh4ow66b"/></g><path class="vyj801g4d"/><path class="biqohvbnp"/></g>`,
		"fallback": "cuida:sort-descending-duotone",
	});
}

export default Component;
