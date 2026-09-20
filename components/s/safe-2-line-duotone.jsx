import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s3nak9mxk.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/m/mi7s-6bxe.css';
import '../../css/a/a4xde2b5a.css';
import '../../css/j/jnsl4jgmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s3nak9mxk"/><path class="pw8f5c0fp"/><path class="mi7s-6bxe"/><path class="a4xde2b5a"/><path class="jnsl4jgmw"/></g>`,
		"fallback": "solar:safe-2-line-duotone",
	});
}

export default Component;
