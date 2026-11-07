import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvv1albfv.css';
import '../../css/q/qufjo3udx.css';
import '../../css/f/f9--bvbqj.css';
import '../../css/v/vz9a8fcir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvv1albfv"/><path class="qufjo3udx"/><path class="f9--bvbqj"/><path class="vz9a8fcir"/>`,
		"fallback": "solar:plate-outline",
	});
}

export default Component;
