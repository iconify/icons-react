import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lws_a6b-r.css';
import '../../css/u/ufdzejvac.css';
import '../../css/x/xsd8r2b6z.css';
import '../../css/c/cy-xakbxe.css';
import '../../css/z/zgsa_6y0q.css';
import '../../css/s/sqimm-owa.css';
import '../../css/d/dhi-t2w2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lws_a6b-r"/><path class="ufdzejvac"/><path class="xsd8r2b6z"/><path class="cy-xakbxe"/><path class="zgsa_6y0q"/><path class="sqimm-owa"/><path class="dhi-t2w2x"/>`,
		"fallback": "selfhst:rackpeek-light",
	});
}

export default Component;
