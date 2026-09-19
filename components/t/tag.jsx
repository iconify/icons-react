import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fk7u5-mbu.css';
import '../../css/d/dm8n7ubqk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="fk7u5-mbu"/><path class="dm8n7ubqk"/></g>`,
		"fallback": "bytesize:tag",
	});
}

export default Component;
