import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a9qmb2b7h.css';
import '../../css/j/jxkcdoisf.css';
import '../../css/f/fq160p_7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a9qmb2b7h"/><path class="jxkcdoisf"/><path class="fq160p_7h"/></g>`,
		"fallback": "tabler:s-turn-right",
	});
}

export default Component;
