import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc17ftbpa.css';
import '../../css/l/l-_0lnqbf.css';
import '../../css/p/pdfna0aet.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc17ftbpa"/><path class="l-_0lnqbf"/><path class="pdfna0aet"/>`,
		"fallback": "selfhst:registry-console",
	});
}

export default Component;
