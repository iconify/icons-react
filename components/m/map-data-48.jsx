import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvjwhfbog.css';
import '../../css/b/bxn05tnng.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvjwhfbog"/><path class="bxn05tnng"/>`,
		"fallback": "energy-icons:map-data-48",
	});
}

export default Component;
