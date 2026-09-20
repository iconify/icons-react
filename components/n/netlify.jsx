import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7y8yu2wv.css';
import '../../css/z/zco63dbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7y8yu2wv"/><path class="zco63dbyg"/>`,
		"fallback": "material-icon-theme:netlify",
	});
}

export default Component;
