import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/fqr1d2opr.css';
import '../../css/o/ojvjrrbut.css';
import '../../css/r/rxnvm7beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="fqr1d2opr"/><path class="ojvjrrbut"/><path class="rxnvm7beh"/></g>`,
		"fallback": "streamline-sharp-color:office-building-2",
	});
}

export default Component;
