import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_44j831n.css';
import '../../css/f/fjz8aybha.css';
import '../../css/m/mib1oqjfw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_44j831n"/><path class="fjz8aybha"/><path class="mib1oqjfw"/>`,
		"fallback": "energy-icons:thermocouple-48",
	});
}

export default Component;
