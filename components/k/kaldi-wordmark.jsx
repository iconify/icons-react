import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjrh6jb6e.css';
import '../../css/q/qpqtl2biq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjrh6jb6e"/><path class="qpqtl2biq"/>`,
		"fallback": "devicon:kaldi-wordmark",
	});
}

export default Component;
