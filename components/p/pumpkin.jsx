import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/itgj_8bii.css';
import '../../css/u/u0rolly8t.css';
import '../../css/i/is696g2sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="itgj_8bii"/><path class="u0rolly8t"/><path class="is696g2sl"/></g>`,
		"fallback": "lucide-lab:pumpkin",
	});
}

export default Component;
