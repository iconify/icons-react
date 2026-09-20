import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xlsig2bgm.css';
import '../../css/e/eaq7x0beu.css';
import '../../css/u/uf-94osvf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xlsig2bgm"/><path class="eaq7x0beu"/><path class="uf-94osvf"/></g>`,
		"fallback": "streamline-color:table-lamp-1",
	});
}

export default Component;
