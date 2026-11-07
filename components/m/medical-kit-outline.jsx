import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k89onwb0c.css';
import '../../css/l/lr49xfj0d.css';
import '../../css/o/o4hc_dhel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k89onwb0c"/><path clip-rule="evenodd" class="lr49xfj0d"/><path clip-rule="evenodd" class="o4hc_dhel"/>`,
		"fallback": "solar:medical-kit-outline",
	});
}

export default Component;
