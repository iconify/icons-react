import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taoscib-d.css';
import '../../css/g/g4_srbq7h.css';
import '../../css/n/nly94abjo.css';
import '../../css/g/g52j4gb0l.css';
import '../../css/e/eziplt3ei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="taoscib-d"/><path class="g4_srbq7h"/><path class="nly94abjo"/><path class="g52j4gb0l"/><path class="eziplt3ei"/>`,
		"fallback": "carbon:interactive-segmentation-cursor",
	});
}

export default Component;
