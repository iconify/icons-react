import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqhsul-mi.css';
import '../../css/r/rg6jpcctx.css';
import '../../css/h/hn9kuubay.css';
import '../../css/i/ioy2u6bps.css';
import '../../css/b/bqzidgs3h.css';
import '../../css/n/nrkqveb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqhsul-mi"/><path class="rg6jpcctx"/><path class="hn9kuubay"/><path clip-rule="evenodd" class="ioy2u6bps"/><path class="bqzidgs3h"/><path class="nrkqveb2f"/>`,
		"fallback": "solar:jar-of-pills-2-bold",
	});
}

export default Component;
