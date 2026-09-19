import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vnjbnob5h.css';
import '../../css/j/jnc96we_h.css';
import '../../css/o/ogzf3qbmf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vnjbnob5h"/><ellipse class="jnc96we_h"/><ellipse class="ogzf3qbmf"/></g>`,
		"fallback": "bytesize:music",
	});
}

export default Component;
