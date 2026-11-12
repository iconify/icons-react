import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmi7xr5ec.css';
import '../../css/r/re6u8gbgx.css';
import '../../css/b/bpn6pm9pz.css';
import '../../css/u/uacs7ebvg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmi7xr5ec"/><path class="re6u8gbgx"/><path class="bpn6pm9pz"/><path class="uacs7ebvg"/>`,
		"fallback": "selfhst:lidbrainz-dark",
	});
}

export default Component;
