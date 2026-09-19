import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7j8ofo6z.css';
import '../../css/l/lf3nfothj.css';
import '../../css/z/zp_lnpb-j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7j8ofo6z"/><path class="lf3nfothj"/><path class="zp_lnpb-j"/>`,
		"fallback": "ep:money",
	});
}

export default Component;
