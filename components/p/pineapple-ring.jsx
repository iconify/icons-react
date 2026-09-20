import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z6ynvvbvu.css';
import '../../css/l/l88n09zdv.css';
import '../../css/c/c9-xmobkl.css';
import '../../css/s/svmzo2bpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><ellipse class="z6ynvvbvu"/><ellipse class="l88n09zdv"/><path class="c9-xmobkl"/><path class="svmzo2bpb"/></g>`,
		"fallback": "lucide-lab:pineapple-ring",
	});
}

export default Component;
