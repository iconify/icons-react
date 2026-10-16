import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gphkpac7l.css';
import '../../css/c/cwzf0sb5m.css';
import '../../css/p/poayr0wpe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gphkpac7l"/><path class="cwzf0sb5m"/><path class="poayr0wpe"/>`,
		"fallback": "energy-icons:iot-device-48-bold",
	});
}

export default Component;
