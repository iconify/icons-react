import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4933sbdd.css';
import '../../css/u/u390qmb9f.css';
import '../../css/i/ipkrns2yp.css';
import '../../css/c/cv-akkbiy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4933sbdd"/><path class="u390qmb9f"/><path class="ipkrns2yp"/><path class="cv-akkbiy"/></g>`,
		"fallback": "streamline-kameleon-color:ladybug-pop",
	});
}

export default Component;
