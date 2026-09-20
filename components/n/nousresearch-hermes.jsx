import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp5pszbjw.css';
import '../../css/m/mp7d1bc8d.css';
import '../../css/q/qohtrw29d.css';
import '../../css/n/ndl2skddu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tp5pszbjw"><path class="mp7d1bc8d"/><path class="qohtrw29d"/><path clip-rule="evenodd" class="ndl2skddu"/></g>`,
		"fallback": "thesvg-color:nousresearch-hermes",
	});
}

export default Component;
