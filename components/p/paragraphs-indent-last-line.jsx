import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p77bzab7z.css';
import '../../css/a/atybejjim.css';
import '../../css/m/my1mcvbnq.css';
import '../../css/l/ll6wsubvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p77bzab7z"/><path class="atybejjim"/><path class="my1mcvbnq"/><path class="ll6wsubvl"/></g>`,
		"fallback": "streamline-freehand-color:paragraphs-indent-last-line",
	});
}

export default Component;
