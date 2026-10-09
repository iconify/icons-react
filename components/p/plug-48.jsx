import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haxjj3y8l.css';
import '../../css/c/ca098sbgi.css';
import '../../css/p/pbj3dmu5b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haxjj3y8l"/><path class="ca098sbgi"/><path class="pbj3dmu5b"/>`,
		"fallback": "energy-icons:plug-48",
	});
}

export default Component;
