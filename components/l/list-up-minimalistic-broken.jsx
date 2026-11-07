import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nmhvanepw.css';
import '../../css/f/f8edcu39k.css';
import '../../css/u/utbx9q75k.css';
import '../../css/p/pre11cbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nmhvanepw"/><path class="f8edcu39k"/><path class="utbx9q75k"/><path class="pre11cbbs"/></g>`,
		"fallback": "solar:list-up-minimalistic-broken",
	});
}

export default Component;
