import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d352xukaj.css';
import '../../css/n/nx5d-bc1s.css';
import '../../css/f/fng1jr83l.css';
import '../../css/b/b-x4x3b8h.css';

const viewBox = {"width":126,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGvabBJgMB" class="d352xukaj"/></defs><g class="nx5d-bc1s"><path class="fng1jr83l"/><mask id="SVGrqCFWbOR"><use href="#SVGvabBJgMB"/></mask><path mask="url(#SVGrqCFWbOR)" class="b-x4x3b8h"/></g>`,
		"fallback": "thesvg-color:plaid-light",
	});
}

export default Component;
