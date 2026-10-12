import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/icip4dbvn.css';
import '../../css/q/qdu8wjber.css';
import '../../css/b/b6lm5ubhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="icip4dbvn"/><path class="qdu8wjber"/><path clip-rule="evenodd" class="b6lm5ubhi"/></g>`,
		"fallback": "lucide-extended:newspaper-duotone",
	});
}

export default Component;
