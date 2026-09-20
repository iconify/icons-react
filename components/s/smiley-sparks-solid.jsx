import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkhz44dei.css';
import '../../css/g/gywxsibfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nkhz44dei"/><path class="gywxsibfz"/>`,
		"fallback": "streamline-plump:smiley-sparks-solid",
	});
}

export default Component;
