import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/iycln-b8i.css';
import '../../css/n/n2jjb_byf.css';
import '../../css/e/eiv1xdzqu.css';
import '../../css/e/ejpt7b0wx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bc1fd0lxe"/><defs><circle id="SVG1g8rabco" class="iycln-b8i"/></defs><clipPath id="SVGJdal8dOW"><use href="#SVG1g8rabco"/></clipPath><g clip-path="url(#SVGJdal8dOW)"><path class="n2jjb_byf"/><path class="eiv1xdzqu"/><path class="ejpt7b0wx"/></g>`,
		"fallback": "selfhst:ollama",
	});
}

export default Component;
