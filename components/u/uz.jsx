import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dp4qn76os.css';
import '../../css/d/dbrmuibkq.css';
import '../../css/d/ddosorbiw.css';
import '../../css/i/ibh-7xb0i.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dp4qn76os"/><path clip-rule="evenodd" class="dbrmuibkq"/><path class="ddosorbiw"/><path clip-rule="evenodd" class="ibh-7xb0i"/></g>`,
		"fallback": "flagpack:uz",
	});
}

export default Component;
