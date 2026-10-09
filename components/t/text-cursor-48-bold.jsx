import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkh-90byk.css';
import '../../css/x/x-e0pwbux.css';
import '../../css/s/s20085b2u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkh-90byk"/><path class="x-e0pwbux"/><path class="s20085b2u"/>`,
		"fallback": "energy-icons:text-cursor-48-bold",
	});
}

export default Component;
