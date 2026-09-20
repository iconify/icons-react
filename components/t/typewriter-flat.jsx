import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q7vqxtz8c.css';
import '../../css/j/jenqg7b4f.css';
import '../../css/o/ocwt-0blw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q7vqxtz8c"/><path class="jenqg7b4f"/><path class="ocwt-0blw"/></g>`,
		"fallback": "streamline-flex-color:typewriter-flat",
	});
}

export default Component;
