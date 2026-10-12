import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y12q2vtuk.css';
import '../../css/n/nq6r5xbvz.css';
import '../../css/f/flapbtbyv.css';
import '../../css/t/tyb6j0bqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y12q2vtuk"/><path class="nq6r5xbvz"/><path class="flapbtbyv"/><path class="tyb6j0bqb"/></g>`,
		"fallback": "lucide-extended:trophy-duotone",
	});
}

export default Component;
