import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqza1ubtx.css';
import '../../css/u/uezcagbky.css';
import '../../css/e/e9wi6tbab.css';
import '../../css/q/q4olcgcmy.css';
import '../../css/v/vmlg40b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqza1ubtx"/><path class="uezcagbky"/><path class="e9wi6tbab"/><path class="q4olcgcmy"/><path class="vmlg40b9u"/>`,
		"fallback": "gcp:traffic-director",
	});
}

export default Component;
