import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc18sub8n.css';
import '../../css/i/iuqdpw_hh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc18sub8n"/><path class="iuqdpw_hh"/>`,
		"fallback": "energy-icons:thermometer-20",
	});
}

export default Component;
