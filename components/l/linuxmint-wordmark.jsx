import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-0eilb3d.css';
import '../../css/s/spf_dtebf.css';
import '../../css/v/vrm0gtb4l.css';
import '../../css/g/gi6z60bcb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-0eilb3d"/><path class="spf_dtebf"/><path class="vrm0gtb4l"/><path class="gi6z60bcb"/>`,
		"fallback": "devicon:linuxmint-wordmark",
	});
}

export default Component;
