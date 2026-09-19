import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f9os-_7eo.css';
import '../../css/c/cyclgcb9w.css';
import '../../css/c/cj9syra8m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f9os-_7eo"/><path class="cyclgcb9w"/><path class="cj9syra8m"/></g>`,
		"fallback": "pepicons:person-checkmark",
	});
}

export default Component;
