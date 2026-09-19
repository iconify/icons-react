import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zjpjbki-t.css';
import '../../css/b/b53ts9b6i.css';
import '../../css/f/fvk21rbzp.css';
import '../../css/u/u4c30j0ef.css';
import '../../css/p/p1p-v4bmj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="zjpjbki-t"/><g class="b53ts9b6i"><path class="fvk21rbzp"/><path class="u4c30j0ef"/><path class="p1p-v4bmj"/></g></g>`,
		"fallback": "cryptocurrency-color:maid",
	});
}

export default Component;
