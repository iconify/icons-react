import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wxnni2bny.css';
import '../../css/s/sw04oac7x.css';
import '../../css/c/cqy9rv-mj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wxnni2bny"/><path class="sw04oac7x"/><rect class="cqy9rv-mj"/></g>`,
		"fallback": "lucide:pill-bottle",
	});
}

export default Component;
