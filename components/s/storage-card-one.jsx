import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/u/utlov4bwm.css';
import '../../css/v/ve9761bes.css';
import '../../css/d/dhgjsb-5c.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="utlov4bwm"/><path class="ve9761bes"/><path class="dhgjsb-5c"/></g>`,
		"fallback": "icon-park:storage-card-one",
	});
}

export default Component;
