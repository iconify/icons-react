import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iebp_9cqm.css';
import '../../css/n/nwkgdwb5n.css';
import '../../css/a/azrz_n2gu.css';
import '../../css/a/abitvh4up.css';
import '../../css/p/pufsi6zza.css';

const viewBox = {"width":726,"height":726};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="iebp_9cqm"><g clip-path="url(#SVGoMqm6bNt)"><path class="nwkgdwb5n"/><path class="azrz_n2gu"/><path class="abitvh4up"/></g><defs><clipPath id="SVGoMqm6bNt"><path class="pufsi6zza"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:replicate-dark",
	});
}

export default Component;
