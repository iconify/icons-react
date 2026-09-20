import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bo7bp7bqb.css';
import '../../css/g/gzlm1jb-p.css';
import '../../css/q/qe99iznek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bo7bp7bqb"/><path class="gzlm1jb-p"/><path class="qe99iznek"/></g>`,
		"fallback": "tabler:sthetoscope",
	});
}

export default Component;
