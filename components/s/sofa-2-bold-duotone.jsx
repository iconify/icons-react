import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay8lzabxd.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/thqt1dbyk.css';
import '../../css/l/lot9ypbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay8lzabxd"/><g class="xtpeb-edw"><path class="thqt1dbyk"/><path class="lot9ypbnj"/></g>`,
		"fallback": "solar:sofa-2-bold-duotone",
	});
}

export default Component;
