import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1p5qlt1y.css';
import '../../css/i/ijs6h7buk.css';
import '../../css/v/vf3c7lbsg.css';
import '../../css/j/jwc8s3dsx.css';
import '../../css/p/pwrb__blp.css';
import '../../css/q/qcp56tbgd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1p5qlt1y"/><path class="ijs6h7buk"/><path class="vf3c7lbsg"/><path class="jwc8s3dsx"/><path class="pwrb__blp"/><path class="qcp56tbgd"/>`,
		"fallback": "energy-icons:pagoda-48",
	});
}

export default Component;
