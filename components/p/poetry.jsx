import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z92us65vz.css';
import '../../css/r/ruzjusbdh.css';
import '../../css/i/i-v3skr5d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z92us65vz"/><path class="ruzjusbdh"/><path class="i-v3skr5d"/>`,
		"fallback": "material-icon-theme:poetry",
	});
}

export default Component;
