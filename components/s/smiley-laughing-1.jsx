import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bsh15bben.css';
import '../../css/l/l7_0xsbva.css';
import '../../css/v/vmpyzqq4e.css';
import '../../css/c/cv4yy908p.css';
import '../../css/a/al8sovw4l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="bsh15bben"/><path class="l7_0xsbva"/><path class="vmpyzqq4e"/><path class="cv4yy908p"/><path class="al8sovw4l"/></g>`,
		"fallback": "streamline-plump-color:smiley-laughing-1",
	});
}

export default Component;
