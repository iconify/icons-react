import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihnl7ab7i.css';
import '../../css/k/k8yin4bou.css';
import '../../css/g/gfbmiabsc.css';
import '../../css/w/wvft85b8f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihnl7ab7i"/><path class="k8yin4bou"/><path class="gfbmiabsc"/><path class="wvft85b8f"/>`,
		"fallback": "energy-icons:solar-irradiance-48-bold",
	});
}

export default Component;
