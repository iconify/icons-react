import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wynwjpree.css';
import '../../css/z/zvs6qbcnn.css';
import '../../css/m/my9nm-bwh.css';
import '../../css/j/j3me78b4l.css';
import '../../css/n/ny1qr-80o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wynwjpree"/><circle class="zvs6qbcnn"/><path class="my9nm-bwh"/><circle class="j3me78b4l"/><circle class="ny1qr-80o"/></g>`,
		"fallback": "lucide-lab:stroller",
	});
}

export default Component;
