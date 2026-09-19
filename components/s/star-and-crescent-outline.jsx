import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ih--ifrdt.css';
import '../../css/c/cqyqpbkvg.css';
import '../../css/d/d5vtl26pr.css';
import '../../css/b/bt0dx5bel.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ih--ifrdt"/><path class="cqyqpbkvg"/><path class="d5vtl26pr"/><path class="bt0dx5bel"/></g>`,
		"fallback": "glyphs:star-and-crescent-outline",
	});
}

export default Component;
