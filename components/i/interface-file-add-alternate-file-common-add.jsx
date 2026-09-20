import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w3cpbmbzk.css';
import '../../css/u/uf0eqhxom.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w3cpbmbzk"/><path class="uf0eqhxom"/></g>`,
		"fallback": "streamline:interface-file-add-alternate-file-common-add",
	});
}

export default Component;
