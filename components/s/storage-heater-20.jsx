import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9kli0b2o.css';
import '../../css/f/fr0jglbrv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9kli0b2o"/><path class="fr0jglbrv"/>`,
		"fallback": "energy-icons:storage-heater-20",
	});
}

export default Component;
