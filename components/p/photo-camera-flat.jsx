import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aaivvlwtu.css';
import '../../css/k/k3x-hgh8w.css';
import '../../css/z/z2twfaidd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aaivvlwtu"/><path clip-rule="evenodd" class="k3x-hgh8w"/><path class="z2twfaidd"/></g>`,
		"fallback": "streamline-flex-color:photo-camera-flat",
	});
}

export default Component;
