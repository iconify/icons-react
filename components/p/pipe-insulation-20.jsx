import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz02lvbot.css';
import '../../css/z/z7r22xbex.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz02lvbot"/><path class="z7r22xbex"/>`,
		"fallback": "energy-icons:pipe-insulation-20",
	});
}

export default Component;
