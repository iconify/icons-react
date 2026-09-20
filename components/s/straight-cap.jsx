import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lr4qwibfw.css';
import '../../css/g/gzytc5ion.css';
import '../../css/t/t19elabye.css';
import '../../css/s/sazkadbzz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lr4qwibfw"/><path class="gzytc5ion"/><path class="t19elabye"/><path class="sazkadbzz"/></g>`,
		"fallback": "streamline-color:straight-cap",
	});
}

export default Component;
