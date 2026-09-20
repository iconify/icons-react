import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr2arq_kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tr2arq_kw"/>`,
		"fallback": "reicon:trash2",
	});
}

export default Component;
