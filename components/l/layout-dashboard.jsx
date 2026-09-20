import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aoxhq7npe.css';
import '../../css/i/ilpqg2l0q.css';
import '../../css/o/ovvq_obta.css';
import '../../css/l/ll6_4rblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="aoxhq7npe"/><rect class="ilpqg2l0q"/><rect class="ovvq_obta"/><rect class="ll6_4rblg"/></g>`,
		"fallback": "lucide:layout-dashboard",
	});
}

export default Component;
