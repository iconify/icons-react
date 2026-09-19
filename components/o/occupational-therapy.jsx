import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ais76dbwa.css';
import '../../css/m/m8ppx3bcm.css';
import '../../css/f/fr7roj4sj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ais76dbwa"/><path class="m8ppx3bcm"/><path class="fr7roj4sj"/></g>`,
		"fallback": "healthicons:occupational-therapy",
	});
}

export default Component;
