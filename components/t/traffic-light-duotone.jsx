import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6cc3pb_a.css';
import '../../css/x/xsn9nsanb.css';
import '../../css/a/aefmnnbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r6cc3pb_a"/><path class="xsn9nsanb"/><path class="aefmnnbnd"/></g>`,
		"fallback": "keyline-icons:traffic-light-duotone",
	});
}

export default Component;
