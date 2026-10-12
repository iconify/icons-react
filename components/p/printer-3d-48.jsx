import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcgu0xbag.css';
import '../../css/v/vllf8o60k.css';
import '../../css/h/h5dupz0ni.css';
import '../../css/t/tnyfbzber.css';
import '../../css/y/ytt4jwbgq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcgu0xbag"/><path class="vllf8o60k"/><path class="h5dupz0ni"/><path class="tnyfbzber"/><path class="ytt4jwbgq"/>`,
		"fallback": "energy-icons:printer-3d-48",
	});
}

export default Component;
