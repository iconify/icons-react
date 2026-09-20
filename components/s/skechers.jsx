import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smtdp5bbp.css';
import '../../css/i/i423b8lay.css';
import '../../css/p/plefd-99d.css';

const viewBox = {"width":445,"height":168};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smtdp5bbp"/><path class="i423b8lay"/><path class="plefd-99d"/>`,
		"fallback": "thesvg-color:skechers",
	});
}

export default Component;
