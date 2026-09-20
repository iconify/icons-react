import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq5gilrjk.css';
import '../../css/c/ck3-yx4dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq5gilrjk"/><path class="ck3-yx4dx"/>`,
		"fallback": "streamline-ultimate:medical-instrument-ambulance-bed-bold",
	});
}

export default Component;
