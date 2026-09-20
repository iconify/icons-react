import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8nb3i--r.css';
import '../../css/m/m3w96hble.css';
import '../../css/y/yvkzvdbqw.css';
import '../../css/s/sfuacrboc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8nb3i--r"/><path class="m3w96hble"/><path class="yvkzvdbqw"/><path class="sfuacrboc"/>`,
		"fallback": "streamline-pixel:photography-focus-flower",
	});
}

export default Component;
