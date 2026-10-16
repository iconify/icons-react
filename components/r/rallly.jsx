import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zobmxybrj.css';
import '../../css/c/ctkeepu1l.css';
import '../../css/f/f7s-pimzp.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zobmxybrj"/><path class="ctkeepu1l"/><path clip-rule="evenodd" class="f7s-pimzp"/></g>`,
		"fallback": "thesvg-color:rallly",
	});
}

export default Component;
