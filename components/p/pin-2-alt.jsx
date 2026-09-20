import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdziokbyu.css';
import '../../css/k/kh0fq5pqy.css';
import '../../css/b/b93noccdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cdziokbyu"/><path class="kh0fq5pqy"/><path class="b93noccdh"/></g>`,
		"fallback": "streamline-ultimate-color:pin-2-alt",
	});
}

export default Component;
