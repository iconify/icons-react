import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/ja-dv5mey.css';
import '../../css/n/nk9dftb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ja-dv5mey"/><path class="nk9dftb5b"/></g>`,
		"fallback": "coolicons:user-duocolor-round",
	});
}

export default Component;
