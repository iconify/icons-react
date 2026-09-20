import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ttm7-_bye.css';
import '../../css/n/nb80adc2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ttm7-_bye"/><path class="nb80adc2c"/></g>`,
		"fallback": "keyline-icons:square-navigation-duotone",
	});
}

export default Component;
