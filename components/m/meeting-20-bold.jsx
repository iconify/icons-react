import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gihw2lrko.css';
import '../../css/b/brlnqubgb.css';
import '../../css/o/ougbzrbsg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gihw2lrko"/><path class="brlnqubgb"/><path class="ougbzrbsg"/>`,
		"fallback": "energy-icons:meeting-20-bold",
	});
}

export default Component;
