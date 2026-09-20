import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stc4fdcup.css';
import '../../css/k/k370xsb9r.css';
import '../../css/h/hdfgeqb3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stc4fdcup"/><path class="k370xsb9r"/><path class="hdfgeqb3t"/>`,
		"fallback": "selfhst:pi-source",
	});
}

export default Component;
