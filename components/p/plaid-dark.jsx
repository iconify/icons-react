import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d352xukaj.css';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kkvupxbje.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/fjry381fa.css';

const viewBox = {"width":126,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGvabBJgMB" class="d352xukaj"/></defs><g class="bi12bsetm"><path class="kkvupxbje"/><mask id="SVGFaSCLdiE" class="n1mjunbsu"><use href="#SVGvabBJgMB"/></mask><path mask="url(#SVGFaSCLdiE)" class="fjry381fa"/></g>`,
		"fallback": "thesvg-color:plaid-dark",
	});
}

export default Component;
