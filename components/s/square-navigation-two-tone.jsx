import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ttm7-_bye.css';
import '../../css/n/nb80adc2c.css';
import '../../css/r/r0twj-bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ttm7-_bye"/><path class="nb80adc2c"/><path class="r0twj-bzb"/></g>`,
		"fallback": "keyline-icons:square-navigation-two-tone",
	});
}

export default Component;
