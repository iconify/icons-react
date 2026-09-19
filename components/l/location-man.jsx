import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmppwob5e.css';
import '../../css/o/o2w8gbcee.css';
import '../../css/v/vc01epbab.css';
import '../../css/n/nre--kigg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmppwob5e"/><path class="o2w8gbcee"/><circle class="vc01epbab"/><path class="nre--kigg"/>`,
		"fallback": "gis:location-man",
	});
}

export default Component;
