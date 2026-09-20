import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er8a8eblt.css';
import '../../css/c/c_exiz4cf.css';
import '../../css/d/dg3xy7bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er8a8eblt"/><path clip-rule="evenodd" class="c_exiz4cf"/><path class="dg3xy7bww"/>`,
		"fallback": "token:slg",
	});
}

export default Component;
