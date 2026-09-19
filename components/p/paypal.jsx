import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfo1k5b-e.css';
import '../../css/n/nlqvrrg1h.css';
import '../../css/n/nniesdbig.css';
import '../../css/j/jaw_f2b3d.css';

const viewBox = {"width":16,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfo1k5b-e"/><path class="nlqvrrg1h"/><path class="nniesdbig"/><path class="jaw_f2b3d"/>`,
		"fallback": "formkit:paypal",
	});
}

export default Component;
