import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a27p9svzp.css';
import '../../css/u/u-dqumrtl.css';
import '../../css/k/kzia-bcxb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a27p9svzp"/><path class="u-dqumrtl"/><path class="kzia-bcxb"/>`,
		"fallback": "carbon:study-read",
	});
}

export default Component;
