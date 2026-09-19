import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7d-ztgbj.css';
import '../../css/y/y70606bue.css';
import '../../css/d/d-7iqjt6o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7d-ztgbj"/><path class="y70606bue"/><path clip-rule="evenodd" class="d-7iqjt6o"/></g>`,
		"fallback": "icon-park-solid:sofa-two",
	});
}

export default Component;
