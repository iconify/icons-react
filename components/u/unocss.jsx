import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-q81khvm.css';
import '../../css/t/tqfna8b9r.css';
import '../../css/n/nxg4_6n1c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="k-q81khvm"/><path class="tqfna8b9r"/><path class="nxg4_6n1c"/>`,
		"fallback": "material-icon-theme:unocss",
	});
}

export default Component;
