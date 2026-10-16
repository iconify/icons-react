import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfa29jb9d.css';
import '../../css/n/nabay3ypw.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfa29jb9d"/><path class="nabay3ypw"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:tunnel-48",
	});
}

export default Component;
