import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt_zhw2mi.css';
import '../../css/i/i_3ks9poz.css';
import '../../css/q/qbyv8qirk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt_zhw2mi"/><path class="i_3ks9poz"/><path class="qbyv8qirk"/>`,
		"fallback": "energy-icons:plug-20-bold",
	});
}

export default Component;
