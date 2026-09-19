import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp4nkhb4n.css';
import '../../css/p/psiglkazx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGSkikSbqg" class="gp4nkhb4n"/></defs><use href="#SVGSkikSbqg" class="psiglkazx"/>`,
		"fallback": "gcp:os-inventory-management",
	});
}

export default Component;
