import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kon2j4bpd.css';
import '../../css/m/mjknonirp.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kon2j4bpd"/><path class="mjknonirp"/><circle class="lmf0ecbhq"/>`,
		"fallback": "clarity:media-changer-outline-badged",
	});
}

export default Component;
