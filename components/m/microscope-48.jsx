import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlnqvbmke.css';
import '../../css/l/lse9ls9yk.css';
import '../../css/o/oexr3lztj.css';
import '../../css/x/x8m_9guzj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlnqvbmke"/><path class="lse9ls9yk"/><path class="oexr3lztj"/><path class="x8m_9guzj"/>`,
		"fallback": "energy-icons:microscope-48",
	});
}

export default Component;
