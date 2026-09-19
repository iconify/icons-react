import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/atdaxeb8x.css';
import '../../css/f/f8zhnzr9w.css';
import '../../css/h/hkp75obgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="atdaxeb8x"/><path class="f8zhnzr9w"/><path class="hkp75obgt"/></g>`,
		"fallback": "akar-icons:jar",
	});
}

export default Component;
